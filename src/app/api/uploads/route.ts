import { mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { requireAdmin, unauthorized } from "@/lib/api-guard";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const MAX_BYTES = 4 * 1024 * 1024;
const TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

function sniffType(bytes: Uint8Array) {
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return "image/jpeg";
  }
  if (
    bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47
  ) {
    return "image/png";
  }
  if (bytes.length >= 6 && bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46) {
    return "image/gif";
  }
  if (
    bytes.length >= 12 &&
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return "image/webp";
  }
  return null;
}

export async function POST(request: Request) {
  if (!(await requireAdmin())) return unauthorized();

  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Elegí una foto" }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "La foto no puede superar los 4 MB" },
      { status: 400 },
    );
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  const type = sniffType(bytes);
  if (!type || !TYPES[type]) {
    return NextResponse.json(
      { error: "Usá una imagen JPG, PNG, WEBP o GIF" },
      { status: 400 },
    );
  }

  const filename = `${crypto.randomUUID()}.${TYPES[type]}`;

  try {
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(`uploads/${filename}`, Buffer.from(bytes), {
        access: "public",
        contentType: type,
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });
      return NextResponse.json({ url: blob.url });
    }

    if (process.env.VERCEL) {
      const dir = path.join(tmpdir(), "cedrus-uploads");
      await mkdir(dir, { recursive: true });
      await writeFile(path.join(dir, filename), bytes);
      return NextResponse.json({ url: `/api/uploads/${filename}` });
    }

    const dir = path.join(process.cwd(), "public", "uploads");
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, filename), bytes);
    return NextResponse.json({ url: `/uploads/${filename}` });
  } catch (error) {
    console.error("No se pudo guardar la foto", error);
    return NextResponse.json(
      { error: "No se pudo subir la foto" },
      { status: 500 },
    );
  }
}
