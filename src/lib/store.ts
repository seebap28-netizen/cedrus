import { promises as fs } from "fs";
import path from "path";
import seedJson from "../../data/store.json";
import { parseMenus } from "./menus";
import type { Category, Product, StoreData } from "./types";

const dataPath = process.env.VERCEL
  ? path.join("/tmp", "cedrus-store.json")
  : path.join(process.cwd(), "data", "store.json");
const seed = seedJson as StoreData;

let cache: StoreData | null = null;

function normalize(data: StoreData): StoreData {
  return {
    categories: data.categories,
    products: data.products.map((item) => ({
      ...item,
      menus: parseMenus(item.menus),
    })),
  };
}

async function persist(data: StoreData) {
  await fs.mkdir(path.dirname(dataPath), { recursive: true });
  const payload = JSON.stringify(data, null, 2);
  const tempPath = `${dataPath}.${process.pid}.tmp`;
  await fs.writeFile(tempPath, payload, "utf8");
  await fs.copyFile(tempPath, dataPath);
  await fs.unlink(tempPath).catch(() => undefined);
}

async function ensureStore(): Promise<StoreData> {
  if (cache) return cache;

  try {
    const raw = await fs.readFile(dataPath, "utf8");
    const parsed = JSON.parse(raw) as StoreData;
    if (!Array.isArray(parsed.categories) || !Array.isArray(parsed.products)) {
      throw new Error("invalid store");
    }
    cache = normalize(parsed);
    return cache;
  } catch {
    cache = normalize(structuredClone(seed));
    try {
      await persist(cache);
    } catch {
      // Vercel filesystem can be read-only outside /tmp
    }
    return cache;
  }
}

async function writeStore(data: StoreData) {
  cache = data;
  await persist(data);
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
  store.products[index] = {
    ...store.products[index],
    ...input,
    menus: input.menus ? parseMenus(input.menus) : store.products[index].menus,
  };
  await writeStore(store);
  return store.products[index];
}

export async function deleteProduct(id: string): Promise<boolean> {
  const store = await ensureStore();
  const before = store.products.length;
  store.products = store.products.filter((item) => item.id !== id);
  if (store.products.length === before) return false;
  await writeStore(store);
  return true;
}
