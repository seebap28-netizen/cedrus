import { unlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { del } from "@vercel/blob";
import type { Product } from "@/lib/types";

function uploadName(url: string) {
  const match = url.match(/\/(?:api\/)?uploads\/([^/?#]+)$/);
  return match?.[1] ?? null;
}

export function isManagedUpload(url: string) {
  if (!url || url.startsWith("/platos/")) return false;
  if (url.startsWith("/api/uploads/") || url.startsWith("/uploads/")) return true;
  try {
    const host = new URL(url).hostname;
    return host.endsWith("blob.vercel-storage.com") || host.endsWith("public.blob.vercel-storage.com");
  } catch {
    return false;
  }
}

export async function deleteUpload(url: string) {
  if (!isManagedUpload(url)) return;

  const name = uploadName(url);
  if (name && /^[a-z0-9-]+\.(jpg|jpeg|png|webp|gif)$/i.test(name)) {
    const files = [
      path.join(process.cwd(), "public", "uploads", name),
      path.join(tmpdir(), "cedrus-uploads", name),
    ];
    for (const file of files) {
      await unlink(file).catch(() => undefined);
    }
  }

  if (/^https?:\/\//i.test(url)) {
    try {
      await del(
        url,
        process.env.BLOB_READ_WRITE_TOKEN
          ? { token: process.env.BLOB_READ_WRITE_TOKEN }
          : {},
      );
    } catch (error) {
      console.error("No se pudo borrar la foto", error);
    }
  }
}

export async function deleteUploadIfUnused(url: string, products: Product[]) {
  if (!url) return;
  if (products.some((item) => item.imageUrl === url)) return;
  await deleteUpload(url);
}
