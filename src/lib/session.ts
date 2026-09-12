const encoder = new TextEncoder();

function secret() {
  return process.env.ADMIN_SECRET || "cedrus-dev-secret";
}

async function sign(payload: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const buffer = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return [...new Uint8Array(buffer)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSessionToken() {
  const payload = `${Date.now()}`;
  return `${payload}.${await sign(payload)}`;
}

export async function isValidSession(token: string | undefined) {
  if (!token?.includes(".")) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  return sig === (await sign(payload));
}
