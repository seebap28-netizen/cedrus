import type { Category, Product } from "@/lib/types";

export type HighlightSlide = {
  id: string;
  name: string;
  category: string;
  description: string;
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
    name: "Torta a pedido",
    category: "Pastelería",
    description: "Tortas a pedido",
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
    id: "torta-matrimonio",
    name: "Torta a pedido",
    category: "Pastelería",
    description: "Tortas a pedido",
    imageUrl: "/platos/torta-matrimonio.jpg",
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
    id: "tabla-compartir",
    name: "Para compartir",
    category: "Tablas",
    description: "Tablas y fajitas para la mesa.",
    imageUrl: "/platos/tabla-compartir.jpg",
  },
  {
    id: "tragos-yellow",
    name: "Tragos",
    category: "Tragos",
    description: "Tragos de la casa, para celebrar.",
    imageUrl: "/platos/tragos-yellow.jpg",
  },
  {
    id: "carne-pure-verde",
    name: "Carnes",
    category: "Platos",
    description: "Platos de la casa, según el día.",
    imageUrl: "/platos/carne-pure-verde.jpg",
  },
  {
    id: "a-lo-pobre",
    name: "A lo pobre",
    category: "Platos",
    description: "Carnes a lo pobre, de la casa.",
    imageUrl: "/platos/a-lo-pobre.jpg",
  },
  {
    id: "tabla-canasta",
    name: "Tabla Cedrus",
    category: "Tablas",
    description: "Tablas para compartir.",
    imageUrl: "/platos/tabla-canasta.jpg",
  },
  {
    id: "tabla-terraza",
    name: "Tablas",
    category: "Tablas",
    description: "Tablas para la mesa.",
    imageUrl: "/platos/tabla-terraza.jpg",
  },
  {
    id: "gin-morado",
    name: "Ramazzotti",
    category: "Tragos",
    description: "Tragos de la casa, para celebrar.",
    imageUrl: "/platos/gin-morado.jpg",
  },
  {
    id: "relleno-arroz",
    name: "Platos de la casa",
    category: "Platos",
    description: "Platos de la casa, según el día.",
    imageUrl: "/platos/relleno-arroz.jpg",
  },
  {
    id: "carne-salteada",
    name: "Salteado de carne",
    category: "Platos",
    description: "Platos de la casa, según el día.",
    imageUrl: "/platos/carne-salteada.jpg",
  },
  {
    id: "tragos-copa",
    name: "Cócteles",
    category: "Tragos",
    description: "Tragos de la casa, para celebrar.",
    imageUrl: "/platos/tragos-copa.jpg",
  },
  {
    id: "espresso-martini",
    name: "Espresso martini",
    category: "Tragos",
    description: "Tragos de la casa, para celebrar.",
    imageUrl: "/platos/espresso-martini.jpg",
  },
  {
    id: "vinos-zona",
    name: "Vinos de la zona",
    category: "Vinos",
    description: "Vinos de la zona.",
    imageUrl: "/platos/vinos-zona.jpg",
  },
  {
    id: "vinos-blancos",
    name: "Vinos blancos",
    category: "Vinos",
    description: "Vinos blancos.",
    imageUrl: "/platos/vinos-blancos.jpg",
  },
  {
    id: "vinos-tintos",
    name: "Vinos tintos",
    category: "Vinos",
    description: "Vinos tintos.",
    imageUrl: "/platos/vinos-tintos.jpg",
  },
  {
    id: "decantador-vino",
    name: "Sangría",
    category: "Tragos",
    description: "Sangría de la casa.",
    imageUrl: "/platos/decantador-vino.jpg",
  },
  {
    id: "ensalada-papas",
    name: "Tabla Cedrus",
    category: "Tablas",
    description: "Tablas para compartir.",
    imageUrl: "/platos/ensalada-papas.jpg",
  },
  {
    id: "carne-huevo",
    name: "Platos de la casa",
    category: "Platos",
    description: "Platos de la casa, según el día.",
    imageUrl: "/platos/carne-huevo.jpg",
  },
  {
    id: "ensalada-camarones",
    name: "Ensalada Cedrus",
    category: "Ensaladas",
    description: "Ensalada Cedrus.",
    imageUrl: "/platos/ensalada-camarones.jpg",
  },
  {
    id: "estofado-pure",
    name: "Estofado",
    category: "Platos",
    description: "Platos de la casa, según el día.",
    imageUrl: "/platos/estofado-pure.jpg",
  },
  {
    id: "fajitas-wrap",
    name: "Fajitas",
    category: "Fajitas",
    description: "Fajitas de la casa.",
    imageUrl: "/platos/fajitas-wrap.jpg",
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
      imageUrl: product?.imageUrl || def.imageUrl,
    };
  });
}
