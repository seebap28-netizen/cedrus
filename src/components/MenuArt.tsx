type Props = {
  categoryId: string;
  className?: string;
};

const ICONS: Record<string, string> = {
  "cat-desayunos": "🍳",
  "cat-cafeteria": "☕",
  "cat-ensaladas": "🥗",
  "cat-bowls": "🥣",
  "cat-platos": "🥩",
  "cat-nino": "🧒",
  "cat-sandwichs": "🍔",
  "cat-completos": "🌭",
  "cat-fajitas": "🌯",
  "cat-agregados": "🥚",
  "cat-tablas": "🍖",
  "cat-papas": "🍟",
  "cat-pizzas": "🍕",
  "cat-pasteleria": "🍰",
  "cat-heladeria": "🍦",
  "cat-bebidas-jugos": "🥤",
  "cat-cervezas": "🍺",
  "cat-schop": "🍻",
  "cat-tragos": "🍸",
  "cat-sour": "🍋",
  "cat-gin": "🫒",
  "cat-mojitos": "🌿",
  "cat-pisco": "🍾",
  "cat-whisky": "🥃",
  "cat-vodka": "🧊",
};

const ALCOHOL = new Set([
  "cat-cervezas",
  "cat-schop",
  "cat-tragos",
  "cat-sour",
  "cat-gin",
  "cat-mojitos",
  "cat-pisco",
  "cat-whisky",
  "cat-vodka",
]);

export function categoryIcon(categoryId: string) {
  return ICONS[categoryId] ?? "🍽️";
}

export function MenuArt({ categoryId, className }: Props) {
  return (
    <span className={`inline-block select-none leading-none ${className ?? ""}`} aria-hidden>
      {categoryIcon(categoryId)}
    </span>
  );
}

export function categorySheetClass(categoryId: string) {
  if (categoryId === "cat-ensaladas") return "bg-[#e7f4ea]";
  if (ALCOHOL.has(categoryId)) return "bg-white";
  if (
    categoryId === "cat-pasteleria" ||
    categoryId === "cat-heladeria" ||
    categoryId === "cat-nino"
  ) {
    return "bg-[#f7e4e6]";
  }
  return "bg-[#fffaf3]";
}

export function categoryHeaderClass(categoryId: string) {
  if (categoryId === "cat-ensaladas") return "bg-[#d7eadc]";
  if (ALCOHOL.has(categoryId)) return "bg-white";
  if (
    categoryId === "cat-pasteleria" ||
    categoryId === "cat-heladeria" ||
    categoryId === "cat-nino"
  ) {
    return "bg-[#f3d4d8]";
  }
  return "";
}
