import { formatPrice } from "@/lib/money";
import { MENUS, menuPath } from "@/lib/menus";
import {
  categoryHeaderClass,
  categoryIcon,
  categorySheetClass,
  MenuArt,
} from "@/components/MenuArt";
import type { Category, MenuId, Product } from "@/lib/types";

function photoSrc(url: string) {
  const name = url.match(/^\/uploads\/([^/]+)$/)?.[1];
  return name ? `/api/uploads/${name}` : url;
}

type Props = {
  categories: Category[];
  products: Product[];
  menu: MenuId;
};

export function MenuBoard({ categories, products, menu }: Props) {
  const groups = categories
    .map((category) => ({
      category,
      items: products.filter(
        (item) => item.available && item.categoryId === category.id,
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div>
      <div className="mb-10 grid gap-3 sm:grid-cols-2">
        {MENUS.map((item) => {
          const selected = item.id === menu;
          return (
            <a
              key={item.id}
              href={menuPath(item.id)}
              className={`rounded-sm border px-5 py-4 text-center ${
                selected
                  ? "border-cedar bg-cedar text-cream"
                  : "border-cedar/20 bg-[#fffaf3] text-cedar hover:border-gold"
              }`}
            >
              <p className="font-serif text-2xl">{item.label}</p>
              <p
                className={`mt-1 text-xs uppercase tracking-[0.22em] ${
                  selected ? "text-cream/70" : "text-muted"
                }`}
              >
                {item.subtitle}
              </p>
            </a>
          );
        })}
      </div>

      {groups.length === 0 ? (
        <p className="rounded-sm bg-[#fffaf3] p-10 text-center text-muted shadow-sm">
          No hay platos disponibles en esta carta.
        </p>
      ) : (
        <>
          <nav className="mb-10 flex flex-wrap justify-center gap-x-5 gap-y-2 border-y border-cedar/10 py-4">
            {groups.map(({ category }) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="text-[11px] uppercase tracking-[0.18em] text-cedar hover:text-gold"
              >
                <span className="mr-1 normal-case tracking-normal" aria-hidden>
                  {categoryIcon(category.id)}
                </span>
                {category.name}
              </a>
            ))}
          </nav>

          <div className="space-y-8">
            {groups.map(({ category, items }) => (
              <section
                key={category.id}
                id={category.id}
                className={`scroll-mt-8 overflow-hidden rounded-sm border border-black/5 shadow-[0_8px_30px_rgba(28,58,46,0.06)] ${categorySheetClass(category.id)}`}
              >
                <header
                  className={`relative px-6 pb-2 pt-8 text-center ${categoryHeaderClass(category.id)}`}
                >
                  <MenuArt
                    categoryId={category.id}
                    className="absolute right-3 top-4 text-5xl md:hidden"
                  />
                  <h2 className="font-serif text-4xl uppercase tracking-[0.18em] text-ink">
                    {category.name}
                  </h2>
                  <div className="mx-auto mt-3 h-px w-24 bg-ink/70" />
                </header>

                <div className="grid gap-6 px-6 py-8 md:grid-cols-[minmax(0,1fr)_10rem] md:items-start">
                  <ul>
                    {items.map((product) => (
                      <li key={product.id} className="py-2.5">
                        <div className="flex items-start gap-3">
                          {product.imageUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={photoSrc(product.imageUrl)}
                              alt=""
                              className="mt-0.5 h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-ink/10"
                            />
                          ) : null}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-baseline text-ink">
                              <p className="max-w-[75%] text-[15px] font-semibold uppercase tracking-[0.04em] sm:text-base">
                                {product.name}
                              </p>
                              <span className="menu-dots" />
                              <p className="shrink-0 text-[15px] font-semibold tabular-nums sm:text-base">
                                {formatPrice(product.price)}
                              </p>
                            </div>
                            {product.description ? (
                              <p className="mt-0.5 max-w-[36rem] text-[11px] uppercase leading-relaxed tracking-[0.06em] text-muted">
                                {product.description}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <aside className="hidden flex-col items-center justify-start md:flex">
                    <MenuArt categoryId={category.id} className="text-8xl" />
                  </aside>
                </div>

                {category.description ? (
                  <p className="border-t border-ink/10 px-6 py-4 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-ink/70">
                    {category.description}
                  </p>
                ) : null}
              </section>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
