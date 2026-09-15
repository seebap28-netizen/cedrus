import { ContactForm } from "@/components/ContactForm";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <div className="relative bg-cedar-deep pb-16 pt-8">
        <SiteHeader />
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Visitanos</p>
          <h1 className="font-serif mt-3 text-5xl text-cream">Contacto y reservas</h1>
        </div>
      </div>
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="font-serif text-3xl text-cedar">Cedrus</h2>
            <ul className="mt-6 space-y-4 text-muted">
              <li>
                <strong className="text-ink">Dirección.</strong> {site.address}
              </li>
              <li>
                <strong className="text-ink">Fono.</strong>{" "}
                <a className="text-cedar underline" href={`tel:${site.phoneTel}`}>
                  {site.phoneDisplay}
                </a>
                {" · "}
                <a className="text-cedar underline" href={site.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <strong className="text-ink">Email.</strong>{" "}
                <a
                  className="text-cedar underline"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>

        <section className="mt-10 overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="font-serif text-2xl text-cedar">Cómo llegar</h2>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-cedar underline"
            >
              Abrir en Google Maps
            </a>
          </div>
          <iframe
            title="Cedrus Café Restaurant en Google Maps"
            src={site.mapsEmbed}
            className="h-[380px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
