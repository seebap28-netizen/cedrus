import { NextResponse } from "next/server";
import { parseContactBody, sendContactMessage } from "@/lib/contact";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Pedido inválido" }, { status: 400 });
  }

  const parsed = parseContactBody(body);
  if ("honeypot" in parsed) {
    return NextResponse.json({ ok: true });
  }
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    await sendContactMessage(parsed);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Probá de nuevo en un momento." },
      { status: 502 },
    );
  }
}
