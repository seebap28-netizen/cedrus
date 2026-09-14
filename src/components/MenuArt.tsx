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
  if (categoryId === "cat-desayunos") return "bg-[#fbf3d4]";
  if (categoryId === "cat-cafeteria") return "bg-[#fde8d6]";
  if (categoryId === "cat-ensaladas") return "bg-[#e7f4ea]";
  if (categoryId === "cat-bowls") return "bg-[#e8d7b8]";
  if (categoryId === "cat-platos") return "bg-[#e4d0b8]";
  if (categoryId === "cat-sandwichs" || categoryId === "cat-completos") {
    return "bg-[#f3e3a6]";
  }
  if (categoryId === "cat-fajitas") return "bg-[#f8dcd8]";
  if (categoryId === "cat-agregados") return "bg-[#e8d5a0]";
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
  if (categoryId === "cat-desayunos") return "bg-[#f6e9b8]";
  if (categoryId === "cat-cafeteria") return "bg-[#f6d4b4]";
  if (categoryId === "cat-ensaladas") return "bg-[#d7eadc]";
  if (categoryId === "cat-bowls") return "bg-[#d9c49a]";
  if (categoryId === "cat-platos") return "bg-[#cbb193]";
  if (categoryId === "cat-sandwichs" || categoryId === "cat-completos") {
    return "bg-[#e6ce6a]";
  }
  if (categoryId === "cat-fajitas") return "bg-[#e8b8b2]";
  if (categoryId === "cat-agregados") return "bg-[#c9a85c]";
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
