import Link from "next/link";
import { getCategories, getProducts } from "@/lib/store";

export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
  const [categories, products] = await Promise.all([getCategories(), getProducts()]);
  const available = products.filter((item) => item.available).length;

  return (
    <div>
      <h1 className="font-serif text-4xl text-cedar">Resumen</h1>
      <p className="mt-2 text-muted">Administrá el menú que se muestra en el sitio.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Stat label="Categorías" value={categories.length} href="/admin/categorias" />
        <Stat label="Productos" value={products.length} href="/admin/productos" />
        <Stat label="Disponibles" value={available} href="/admin/productos" />
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  href,
}: {
  label: string;
  value: number;
  href: string;
}) {
  return (
    <Link href={href} className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md">
      <p className="text-sm text-muted">{label}</p>
      <p className="font-serif mt-2 text-4xl text-cedar">{value}</p>
    </Link>
  );
}
