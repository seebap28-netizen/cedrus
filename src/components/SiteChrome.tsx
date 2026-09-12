import { SocialIcons } from "@/components/SocialIcons";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/menu/semana", label: "Lunes a sábado" },
  { href: "/menu/domingo", label: "Domingo" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-30 pointer-events-none"
          : "relative z-30 bg-cedar-deep"
      }
    >
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="font-serif text-xl tracking-wide text-cream sm:text-2xl">
          Cedrus Café Restaurant
        </a>
        <nav className="flex flex-wrap items-center justify-end gap-4 text-xs uppercase tracking-[0.18em] text-cream/85 sm:gap-6 sm:text-sm">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-cedar-deep py-10 text-cream/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
        <div className="text-sm">
          <p>{site.address}</p>
          <p>
            Fono:{" "}
            <a className="text-gold hover:underline" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </p>
        </div>
        <SocialIcons />
      </div>
    </footer>
  );
}
