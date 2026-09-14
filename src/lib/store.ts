import { promises as fs } from "fs";
import path from "path";
import { get, put } from "@vercel/blob";
import seedJson from "../../data/store.json";
import { parseMenus } from "./menus";
import type { Category, Product, StoreData } from "./types";
import { deleteUploadIfUnused } from "./uploads";

const STORE_BLOB = "cedrus-store.json";
const dataPath = path.join(process.cwd(), "data", "store.json");
const seed = seedJson as StoreData;

let cache: StoreData | null = null;

function blobAuth() {
  return process.env.BLOB_READ_WRITE_TOKEN
    ? { token: process.env.BLOB_READ_WRITE_TOKEN }
    : {};
}

function useRemoteStore() {
  return Boolean(
    process.env.VERCEL ||
      process.env.BLOB_READ_WRITE_TOKEN ||
      process.env.BLOB_STORE_ID,
  );
}

function normalize(data: StoreData): StoreData {
  return {
    categories: data.categories,
    products: data.products.map((item) => ({
      ...item,
      menus: parseMenus(item.menus),
    })),
  };
}

function validStore(data: unknown): data is StoreData {
  if (!data || typeof data !== "object") return false;
  const parsed = data as StoreData;
  return Array.isArray(parsed.categories) && Array.isArray(parsed.products);
}

async function persistLocal(data: StoreData) {
  await fs.mkdir(path.dirname(dataPath), { recursive: true });
  const payload = JSON.stringify(data, null, 2);
  const tempPath = `${dataPath}.${process.pid}.tmp`;
  await fs.writeFile(tempPath, payload, "utf8");
  await fs.copyFile(tempPath, dataPath);
  await fs.unlink(tempPath).catch(() => undefined);
}

async function readBlobStore(): Promise<StoreData | null> {
  try {
    const result = await get(STORE_BLOB, {
      access: "public",
      useCache: false,
      ...blobAuth(),
    });
    if (!result || result.statusCode !== 200 || !result.stream) return null;
    const parsed = JSON.parse(await new Response(result.stream).text()) as unknown;
    return validStore(parsed) ? normalize(parsed) : null;
  } catch {
    return null;
  }
}

async function writeBlobStore(data: StoreData, overwrite = true) {
  await put(STORE_BLOB, JSON.stringify(data), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: overwrite,
    contentType: "application/json",
    cacheControlMaxAge: 0,
    ...blobAuth(),
  });
}

async function ensureStore(): Promise<StoreData> {
  if (useRemoteStore()) {
    const remote = await readBlobStore();
    if (remote) return remote;
    const initial = normalize(structuredClone(seed));
    try {
      await writeBlobStore(initial, false);
    } catch {
      const retry = await readBlobStore();
      if (retry) return retry;
    }
    return initial;
  }

  if (cache) return cache;

  try {
    const raw = await fs.readFile(dataPath, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (!validStore(parsed)) throw new Error("invalid store");
    cache = normalize(parsed);
    return cache;
  } catch {
    cache = normalize(structuredClone(seed));
    try {
      await persistLocal(cache);
    } catch {
      // ignore
    }
    return cache;
  }
}

async function writeStore(data: StoreData) {
  if (useRemoteStore()) {
    await writeBlobStore(data);
    return;
  }
  cache = data;
  await persistLocal(data);
}

export async function getStore() {
  return ensureStore();
}

export async function getCategories() {
  const store = await ensureStore();
  return [...store.categories].sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getProducts() {
  const store = await ensureStore();
  return store.products;
}

export async function createCategory(
  input: Omit<Category, "id">,
): Promise<Category> {
  const store = await ensureStore();
  const category: Category = { ...input, id: crypto.randomUUID() };
  store.categories.push(category);
  await writeStore(store);
  return category;
}

export async function updateCategory(
  id: string,
  input: Partial<Omit<Category, "id">>,
): Promise<Category | null> {
  const store = await ensureStore();
  const index = store.categories.findIndex((item) => item.id === id);
  if (index === -1) return null;
  store.categories[index] = { ...store.categories[index], ...input };
  await writeStore(store);
  return store.categories[index];
}

export async function deleteCategory(id: string): Promise<"ok" | "not_found" | "in_use"> {
  const store = await ensureStore();
  if (!store.categories.some((item) => item.id === id)) return "not_found";
  if (store.products.some((item) => item.categoryId === id)) return "in_use";
  store.categories = store.categories.filter((item) => item.id !== id);
  await writeStore(store);
  return "ok";
}

export async function createProduct(
  input: Omit<Product, "id">,
): Promise<Product> {
  const store = await ensureStore();
  const product: Product = {
    ...input,
    id: crypto.randomUUID(),
    menus: parseMenus(input.menus),
  };
  store.products.push(product);
  await writeStore(store);
  return product;
}

export async function updateProduct(
  id: string,
  input: Partial<Omit<Product, "id">>,
): Promise<Product | null> {
  const store = await ensureStore();
  const index = store.products.findIndex((item) => item.id === id);
  if (index === -1) return null;
  const previousUrl = store.products[index].imageUrl;
  store.products[index] = {
    ...store.products[index],
    ...input,
    menus: input.menus ? parseMenus(input.menus) : store.products[index].menus,
  };
  if (input.imageUrl === "") {
    const url = previousUrl;
    if (url) {
      store.products = store.products.map((item) =>
        item.imageUrl === url ? { ...item, imageUrl: "" } : item,
      );
    }
  }
  await writeStore(store);
  if (input.imageUrl !== undefined && previousUrl && previousUrl !== store.products[index].imageUrl) {
    await deleteUploadIfUnused(previousUrl, store.products);
  }
  return store.products.find((item) => item.id === id) ?? store.products[index];
}

export async function deleteProduct(id: string): Promise<boolean> {
  const store = await ensureStore();
  const product = store.products.find((item) => item.id === id);
  if (!product) return false;
  store.products = store.products.filter((item) => item.id !== id);
  await writeStore(store);
  if (product.imageUrl) {
    await deleteUploadIfUnused(product.imageUrl, store.products);
  }
  return true;
}
