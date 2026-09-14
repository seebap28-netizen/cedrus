import { formatPrice } from "@/lib/money";
import { MENUS, menuPath } from "@/lib/menus";
import type { Category, MenuId, Product } from "@/lib/types";

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
      <div className="mb-8 grid gap-3 sm:grid-cols-2">
        {MENUS.map((item) => {
          const selected = item.id === menu;
          return (
            <a
              key={item.id}
              href={menuPath(item.id)}
              className={`rounded-2xl border px-5 py-4 ${
                selected
                  ? "border-gold bg-cedar text-cream"
                  : "border-transparent bg-white text-cedar hover:border-gold/40"
              }`}
            >
              <p className="font-serif text-2xl">{item.label}</p>
              <p className={`text-sm ${selected ? "text-cream/70" : "text-muted"}`}>
                {item.subtitle}
              </p>
            </a>
          );
        })}
      </div>

      {groups.length === 0 ? (
        <p className="rounded-2xl bg-white p-10 text-center text-muted">
          No hay platos disponibles en esta carta.
        </p>
      ) : (
        <>
          <div className="mb-10 flex flex-wrap gap-2">
            {groups.map(({ category }) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full bg-white px-4 py-2 text-sm text-cedar hover:bg-cedar hover:text-cream"
              >
                {category.name}
              </a>
            ))}
          </div>
          <div className="space-y-10">
            {groups.map(({ category, items }) => (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-8 overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="bg-cedar-soft px-6 py-4">
                  <h2 className="font-serif text-3xl text-cream">{category.name}</h2>
                  {category.description ? (
                    <p className="mt-1 text-sm text-cream/70">{category.description}</p>
                  ) : null}
                </div>
                <ul className="divide-y divide-black/5 px-6">
                  {items.map((product) => (
                    <li
                      key={product.id}
                      className="flex items-start justify-between gap-4 py-3"
                    >
                      <div className="flex min-w-0 items-start gap-3">
                        {product.imageUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={product.imageUrl}
                            alt=""
                            className="h-14 w-14 shrink-0 rounded-lg object-cover"
                          />
                        ) : null}
                        <div>
                          <p className="font-medium text-ink">{product.name}</p>
                          {product.description ? (
                            <p className="mt-0.5 text-sm text-muted">
                              {product.description}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <p className="shrink-0 font-medium text-cedar">
                        {formatPrice(product.price)}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
