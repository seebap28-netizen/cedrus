export const contactInbox =
  process.env.CONTACT_EMAIL?.trim() || "cedrusrestaurantycafe@gmail.com";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseContactBody(body: {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
}) {
  if (typeof body.website === "string" && body.website.trim()) {
    return { honeypot: true as const };
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2 || name.length > 80) {
    return { error: "Escribí un nombre válido." };
  }
  if (!emailPattern.test(email) || email.length > 120) {
    return { error: "Escribí un email válido." };
  }
  if (message.length < 5 || message.length > 2000) {
    return { error: "Escribí un mensaje." };
  }

  return { name, email, message };
}

export async function sendContactMessage(input: {
  name: string;
  email: string;
  message: string;
}) {
  const resendKey = process.env.RESEND_API_KEY?.trim();
  if (resendKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM?.trim() || "Cedrus <beth.t@example.com>",
        to: [contactInbox],
        reply_to: input.email,
        subject: `Mensaje de ${input.name} — Cedrus`,
        text: `Nombre: ${input.name}\nEmail: ${input.email}\n\n${input.message}`,
      }),
    });
    if (!response.ok) {
      throw new Error(await response.text());
    }
    return;
  }

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(contactInbox)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        message: input.message,
        _subject: `Mensaje de ${input.name} — Cedrus`,
        _template: "table",
        _captcha: "false",
        _replyto: input.email,
      }),
    },
  );

  const payload = (await response.json().catch(() => null)) as {
    success?: string | boolean;
    message?: string;
  } | null;

  if (!response.ok || payload?.success === false) {
    throw new Error(payload?.message || "No se pudo enviar el mensaje.");
  }
}
