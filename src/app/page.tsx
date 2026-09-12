import Image from "next/image";
import { FeaturedRunway } from "@/components/FeaturedRunway";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { MENUS, menuPath, todayMenu } from "@/lib/menus";
import { homeHighlights } from "@/lib/highlights";
import { getCategories, getProducts } from "@/lib/store";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [categories, products] = await Promise.all([getCategories(), getProducts()]);
  const current = todayMenu();
  const highlights = homeHighlights(products, categories);

  return (
    <>
      <SiteHeader overlay />
      <main>
        <section className="relative min-h-[88vh] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
            alt="Mesa de restaurante Cedrus"
            fill
            priority
            className="pointer-events-none object-cover"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-cedar-deep/70" />
          <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-6 pb-24 pt-32">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">
              {site.address}
            </p>
            <h1 className="font-serif max-w-3xl text-5xl leading-tight text-cream sm:text-7xl">
              Café y restaurant en Coelemu
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/80">
              Carta de lunes a sábado y carta de los domingos, para compartir en
              familia.
            </p>
            <div className="relative z-10 mt-10 flex flex-wrap gap-4">
              <a
                href={menuPath(current)}
                className="rounded-full bg-gold px-6 py-3 text-sm font-medium uppercase tracking-widest text-cedar-deep"
              >
                Carta de hoy
              </a>
              <a
                href={site.whatsappReserve}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cream/40 px-6 py-3 text-sm uppercase tracking-widest text-cream"
              >
                Reservar
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Dos cartas</p>
          <h2 className="font-serif mt-2 text-4xl text-cedar">Lunes a sábado y domingo</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {MENUS.map((menu) => (
              <a
                key={menu.id}
                href={menuPath(menu.id)}
                className="relative z-10 rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-widest text-gold">{menu.subtitle}</p>
                <h3 className="font-serif mt-2 text-3xl text-cedar">{menu.label}</h3>
                <p className="mt-3 text-sm text-muted">
                  {menu.id === "weekday"
                    ? "Carta de lunes a sábado, con desayunos, platos y la carta completa."
                    : "Tablas, carnes, pizzas y schops de los domingos en Cedrus."}
                </p>
                <span className="mt-6 inline-block text-sm uppercase tracking-widest text-cedar">
                  Ver carta →
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto mb-12 flex max-w-6xl items-end justify-between gap-6 px-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Destacados</p>
              <h2 className="font-serif mt-2 text-4xl text-cedar">De la casa</h2>
            </div>
            <a
              href={menuPath(current)}
              className="text-sm uppercase tracking-widest text-cedar"
            >
              Carta completa →
            </a>
          </div>
          <FeaturedRunway items={highlights} />
        </section>

        <section className="bg-cedar text-cream">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Cedrus</p>
              <h2 className="font-serif mt-3 text-4xl">Un lugar para quedarse</h2>
              <p className="mt-5 leading-7 text-cream/80">
                Frente a la plaza de Coelemu, Cedrus es café y restaurant: mesas al
                aire libre, sala de madera y una carta amplia para almorzar, tomar
                algo o reunirse en familia. De lunes a sábado hay desayunos, platos,
                sandwichs y pizzas; el domingo se arma otra mesa, con tablas y
                carnes para compartir.
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-2xl">
              <Image
                src="/cedrus-fachada.png"
                alt="Fachada de Cedrus Café Restaurant en Coelemu"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
