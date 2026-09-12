"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/admin", label: "Resumen" },
  { href: "/admin/categorias", label: "Categorías" },
  { href: "/admin/productos", label: "Productos" },
];

export function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <aside className="flex w-full flex-col bg-cedar-deep p-6 text-cream md:min-h-screen md:w-64">
      <Link href="/" className="font-serif text-2xl tracking-[0.18em]">
        CEDRUS
      </Link>
      <p className="mt-1 text-xs uppercase tracking-widest text-gold">Administración</p>
      <nav className="mt-10 flex flex-1 flex-col gap-2">
        {links.map((link) => {
          const active =
            link.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm ${
                active ? "bg-gold text-cedar-deep" : "hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <button
        type="button"
        onClick={logout}
        className="mt-6 text-left text-sm text-cream/70 hover:text-gold"
      >
        Cerrar sesión
      </button>
    </aside>
  );
}
