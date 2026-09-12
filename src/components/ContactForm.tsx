"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSending(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });
      const payload = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;
      if (!response.ok) {
        throw new Error(payload?.error || "No se pudo enviar el mensaje.");
      }
      setSent(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "No se pudo enviar el mensaje.",
      );
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h2 className="font-serif text-3xl text-cedar">Gracias</h2>
        <p className="mt-4 text-muted">
          Recibimos tu mensaje. Si es urgente, escribinos por WhatsApp al{" "}
          {site.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="font-serif text-3xl text-cedar">Escribinos</h2>
      <label className="mt-6 block text-sm">
        Nombre
        <input
          required
          className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2"
          name="name"
          autoComplete="name"
        />
      </label>
      <label className="mt-4 block text-sm">
        Email
        <input
          required
          className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2"
          type="email"
          name="email"
          autoComplete="email"
        />
      </label>
      <label className="mt-4 block text-sm">
        Mensaje
        <textarea
          required
          className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2"
          name="message"
          rows={4}
        />
      </label>
      <div className="hidden" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" name="website" />
      </div>
      {error ? <p className="mt-4 text-sm text-red-700">{error}</p> : null}
      <button
        type="submit"
        disabled={sending}
        className="mt-6 rounded-full bg-cedar px-6 py-3 text-sm uppercase tracking-widest text-cream disabled:opacity-60"
      >
        {sending ? "Enviando…" : "Enviar"}
      </button>
    </form>
  );
}
