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
    id: "entrana-pobre",
    productId: "prod-entrana-pobre",
    imageUrl: "/platos/entrana-a-lo-pobre.jpg",
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
  {
    id: "torta-matrimonio",
    name: "Torta de matrimonio",
    category: "Pastelería",
    description: "Tortas a pedido, según el día.",
    imageUrl: "/platos/torta-matrimonio.jpg",
  },
  {
    id: "torta-celebracion",
    name: "Torta de celebración",
    category: "Pastelería",
    description: "Tortas a pedido, según el día.",
    imageUrl: "/platos/torta-celebracion.jpg",
  },
  {
    id: "torta-flores",
    name: "Torta de flores",
    category: "Pastelería",
    description: "Tortas a pedido, según el día.",
    imageUrl: "/platos/torta-flores.jpg",
  },
  {
    id: "postre-merengue",
    name: "Postres de la casa",
    category: "Pastelería",
    description: "Dulces del día, para compartir.",
    imageUrl: "/platos/postre-merengue.jpg",
  },
  {
    id: "torta-flores-rojas",
    name: "Torta",
    category: "Pastelería",
    description: "Tortas a pedido, según el día.",
    imageUrl: "/platos/torta-flores-rojas.jpg",
  },
  {
    id: "volcan-chocolate",
    name: "Volcán de chocolate",
    category: "Pastelería",
    description: "Postres de la casa, según el día.",
    imageUrl: "/platos/volcan-chocolate.jpg",
  },
  {
    id: "torta-cumpleanos-2",
    name: "Torta de cumpleaños",
    category: "Pastelería",
    description: "Tortas a pedido, según el día.",
    imageUrl: "/platos/torta-cumpleanos-2.jpg",
  },
  {
    id: "torta-boda",
    name: "Torta de boda",
    category: "Pastelería",
    description: "Tortas a pedido, según el día.",
    imageUrl: "/platos/torta-boda.jpg",
  },
  {
    id: "torta-chocolate",
    name: "Torta de chocolate",
    category: "Pastelería",
    description: "Tortas a pedido, según el día.",
    imageUrl: "/platos/torta-chocolate.jpg",
  },
  {
    id: "kuchen-sureno",
    name: "Kuchen sureño",
    category: "Pastelería",
    description: "Kuchen según disponibilidad del día.",
    imageUrl: "/platos/kuchen-sureno.jpg",
  },
  {
    id: "carne-al-horno",
    name: "Carnes al horno",
    category: "Platos",
    description: "Platos de la casa, según el día.",
    imageUrl: "/platos/carne-al-horno.jpg",
  },
  {
    id: "pescado",
    name: "Pescado",
    category: "Platos",
    description: "Platos de la casa, según el día.",
    imageUrl: "/platos/pescado.jpg",
  },
  {
    id: "gratinado",
    name: "Al horno",
    category: "Platos",
    description: "Platos de la casa, según el día.",
    imageUrl: "/platos/gratinado.jpg",
  },
  {
    id: "pasta",
    name: "Pastas",
    category: "Platos",
    description: "Platos de la casa, según el día.",
    imageUrl: "/platos/pasta.jpg",
  },
  {
    id: "churros",
    name: "Churros",
    category: "Pastelería",
    description: "Dulces de la casa, según el día.",
    imageUrl: "/platos/churros.jpg",
  },
  {
    id: "tabla-compartir",
    name: "Para compartir",
    category: "Tablas",
    description: "Tablas y fajitas para la mesa.",
    imageUrl: "/platos/tabla-compartir.jpg",
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
