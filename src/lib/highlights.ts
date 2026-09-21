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
    id: "tabla-compartir",
    name: "Para compartir",
    category: "Tablas",
    description: "Tablas y fajitas para la mesa.",
    imageUrl: "/platos/tabla-compartir.jpg",
  },
  {
    id: "salmon-betarraga",
    name: "Salmón",
    category: "Platos",
    description: "Platos de la casa, según el día.",
    imageUrl: "/platos/salmon-betarraga.jpg",
  },
  {
    id: "tragos-yellow",
    name: "Tragos",
    category: "Tragos",
    description: "Tragos de la casa, para celebrar.",
    imageUrl: "/platos/tragos-yellow.jpg",
  },
  {
    id: "pescado-pasta",
    name: "Pescado con pasta",
    category: "Platos",
    description: "Platos de la casa, según el día.",
    imageUrl: "/platos/pescado-pasta.jpg",
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
    name: "Gin",
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
    id: "porcion-chocolate",
    name: "Torta de chocolate",
    category: "Pastelería",
    description: "Porción de torta, según el día.",
    imageUrl: "/platos/porcion-chocolate.jpg",
  },
  {
    id: "carne-salteada",
    name: "Salteado de carne",
    category: "Platos",
    description: "Platos de la casa, según el día.",
    imageUrl: "/platos/carne-salteada.jpg",
  },
  {
    id: "torta-drip-rosa",
    name: "Torta de cumpleaños",
    category: "Pastelería",
    description: "Tortas a pedido, según el día.",
    imageUrl: "/platos/torta-drip-rosa.jpg",
  },
  {
    id: "torta-rosas-gris",
    name: "Torta de aniversario",
    category: "Pastelería",
    description: "Tortas a pedido, según el día.",
    imageUrl: "/platos/torta-rosas-gris.jpg",
  },
  {
    id: "tragos-copa",
    name: "Cócteles",
    category: "Tragos",
    description: "Tragos de la casa, para celebrar.",
    imageUrl: "/platos/tragos-copa.jpg",
  },
  {
    id: "coctel-corazones",
    name: "Cóctel de la casa",
    category: "Tragos",
    description: "Tragos de la casa, para celebrar.",
    imageUrl: "/platos/coctel-corazones.jpg",
  },
  {
    id: "espresso-martini",
    name: "Espresso martini",
    category: "Tragos",
    description: "Tragos de la casa, para celebrar.",
    imageUrl: "/platos/espresso-martini.jpg",
  },
  {
    id: "decantador-vino",
    name: "Vinos",
    category: "Tragos",
    description: "Vinos y tragos de la casa.",
    imageUrl: "/platos/decantador-vino.jpg",
  },
  {
    id: "ensalada-papas",
    name: "Ensaladas",
    category: "Ensaladas",
    description: "Ensaladas de la casa, para compartir.",
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
    id: "pescado-cous-cous",
    name: "Pescado",
    category: "Platos",
    description: "Platos de la casa, según el día.",
    imageUrl: "/platos/pescado-cous-cous.jpg",
  },
  {
    id: "ensalada-camarones",
    name: "Ensalada de camarones",
    category: "Ensaladas",
    description: "Ensaladas de la casa.",
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
    id: "souffle-ensalada",
    name: "Al horno",
    category: "Platos",
    description: "Platos de la casa, según el día.",
    imageUrl: "/platos/souffle-ensalada.jpg",
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
      price: product?.price ?? null,
      imageUrl: product?.imageUrl || def.imageUrl,
    };
  });
}
