import { notFound } from "next/navigation";
import { MenuBoard } from "@/components/MenuBoard";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { isOnMenu, menuFromSlug, menuMeta } from "@/lib/menus";
import { getCategories, getProducts } from "@/lib/store";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function MenuCartaPage({
  params,
}: {
  params: Promise<{ carta: string }>;
}) {
  const { carta } = await params;
  const menu = menuFromSlug(carta);
  if (!menu) notFound();

  const [categories, products] = await Promise.all([getCategories(), getProducts()]);
  const meta = menuMeta(menu);

  return (
    <>
      <div className="relative bg-cedar-deep pb-16 pt-8">
        <SiteHeader />
        <div className="mx-auto max-w-6xl px-6 pt-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Dos cartas</p>
          <h1 className="font-serif mt-3 text-5xl text-cream">{meta.label}</h1>
          <p className="mt-4 max-w-2xl text-cream/75">{meta.subtitle}</p>
        </div>
      </div>
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <MenuBoard
          categories={categories}
          products={products.filter((item) => isOnMenu(item, menu))}
          menu={menu}
        />
      </main>
      <SiteFooter />
    </>
  );
}
