import { readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const TYPES: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
};

export async function GET(
  _request: Request,
  context: { params: Promise<{ name: string }> },
) {
  const { name } = await context.params;
  if (!/^[a-z0-9-]+\.(jpg|jpeg|png|webp|gif)$/i.test(name)) {
    return NextResponse.json({ error: "Archivo inválido" }, { status: 400 });
  }

  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  const candidates = [
    path.join(process.cwd(), "public", "uploads", name),
    path.join(tmpdir(), "cedrus-uploads", name),
  ];

  for (const file of candidates) {
    try {
      const data = await readFile(file);
      return new NextResponse(new Uint8Array(data), {
        headers: {
          "Content-Type": TYPES[ext] || "application/octet-stream",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    } catch {
      // try next location
    }
  }

  return NextResponse.json({ error: "No encontrado" }, { status: 404 });
}
