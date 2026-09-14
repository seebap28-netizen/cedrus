import { cookies } from "next/headers";
import { createSessionToken, isValidSession } from "./session";

const COOKIE = "cedrus_admin";

export function adminPassword() {
  return process.env.ADMIN_PASSWORD || "cedrus123";
}

export async function isAdmin() {
  const jar = await cookies();
  return isValidSession(jar.get(COOKIE)?.value);
}

export async function setAdminCookie() {
  const jar = await cookies();
  jar.set(COOKIE, await createSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.VERCEL === "1",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearAdminCookie() {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export function passwordsMatch(input: string) {
  return input === adminPassword();
}
