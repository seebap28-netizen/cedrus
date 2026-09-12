import type { Category, Product } from "@/lib/types";

export type HighlightSlide = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number | null;
  imageUrl: string;
};

const defs: Array<{
  id: string;
  productId?: string;
  name?: string;
  category?: string;
  description?: string;
  imageUrl: string;
}> = [
  {
    id: "torta-amor",
    productId: "prod-torta-amor",
    imageUrl: "/platos/torta.jpg",
  },
  {
    id: "hamburguesa-cedrus",
    productId: "prod-hamburguesa-cedrus",
    imageUrl: "/platos/hamburguesa-cedrus.jpg",
  },
  {
    id: "filete-pobre",
    productId: "prod-filete-pobre",
    imageUrl: "/platos/filete-a-lo-pobre.jpg",
  },
  {
    id: "torta-cumpleanos",
    name: "Tortas de cumpleaños",
    category: "Pastelería",
    description: "Tortas a pedido, según el día.",
    imageUrl: "/platos/torta-cumpleanos.jpg",
  },
  {
    id: "cafe-love",
    productId: "prod-capuchino-grande",
    name: "Café Love",
    category: "Cafetería",
    description: "Cafés de la casa, para compartir.",
    imageUrl: "/platos/cafe-love.jpg",
  },
  {
    id: "coctel-cedrus",
    name: "Cócteles",
    category: "Tragos",
    description: "Tragos de la casa, para celebrar.",
    imageUrl: "/platos/coctel-cedrus.jpg",
  },
  {
    id: "torta-frutillas",
    name: "Torta de frutillas",
    category: "Pastelería",
    description: "Tortas a pedido, según el día.",
    imageUrl: "/platos/torta-frutillas.jpg",
  },
];

export function homeHighlights(
  products: Product[],
  categories: Category[],
): HighlightSlide[] {
  const byId = new Map(products.map((item) => [item.id, item]));
  const categoryName = (id: string) =>
    categories.find((category) => category.id === id)?.name ?? "";

  return defs.map((def) => {
    const product = def.productId ? byId.get(def.productId) : undefined;
    return {
      id: def.id,
      name: def.name || product?.name || "Cedrus",
      category: def.category || (product ? categoryName(product.categoryId) : ""),
      description: def.description || product?.description || "",
      price: product?.price ?? null,
      imageUrl: def.imageUrl,
    };
  });
}
