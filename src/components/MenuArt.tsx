const PHOTOS: Record<string, string> = {
  "cat-desayunos": "/platos/carne-huevo.jpg",
  "cat-cafeteria": "/platos/cafe-love.jpg",
  "cat-ensaladas": "/platos/ensalada-camarones.jpg",
  "cat-bowls": "/platos/pescado-cous-cous.jpg",
  "cat-platos": "/platos/a-lo-pobre.jpg",
  "cat-nino": "/platos/pasta.jpg",
  "cat-sandwichs": "/platos/hamburguesa-cedrus.jpg",
  "cat-fajitas": "/platos/fajitas-wrap.jpg",
  "cat-tablas": "/platos/tabla-compartir.jpg",
  "cat-papas": "/platos/ensalada-papas.jpg",
  "cat-pasteleria": "/platos/torta.jpg",
  "cat-heladeria": "/platos/volcan-chocolate.jpg",
  "cat-tragos": "/platos/coctel-cedrus.jpg",
  "cat-sour": "/platos/coctel-corazones.jpg",
  "cat-gin": "/platos/gin-morado.jpg",
  "cat-mojitos": "/platos/tragos-copa.jpg",
  "cat-pisco": "/platos/decantador-vino.jpg",
  "cat-whisky": "/platos/espresso-martini.jpg",
  "cat-vodka": "/platos/tragos-yellow.jpg",
};

export function categoryPhoto(categoryId: string) {
  return PHOTOS[categoryId] ?? "";
}

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
