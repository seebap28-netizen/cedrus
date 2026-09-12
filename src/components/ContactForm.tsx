"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <h2 className="font-serif text-3xl text-cedar">Gracias</h2>
        <p className="mt-4 text-muted">
          Gracias. Si es urgente, escribinos por WhatsApp al {site.phoneDisplay}.
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
        />
      </label>
      <label className="mt-4 block text-sm">
        Email
        <input
          required
          className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2"
          type="email"
          name="email"
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
      <button
        type="submit"
        className="mt-6 rounded-full bg-cedar px-6 py-3 text-sm uppercase tracking-widest text-cream"
      >
        Enviar
      </button>
    </form>
  );
}
