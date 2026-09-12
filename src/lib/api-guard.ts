import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { isValidSession } from "@/lib/session";

export function unauthorized() {
  return NextResponse.json({ error: "No autorizado" }, { status: 401 });
}

export async function requireAdmin() {
  const jar = await cookies();
  return isValidSession(jar.get("cedrus_admin")?.value);
}
