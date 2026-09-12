import type { MenuId, Product } from "./types";

export const MENUS = [
  {
    id: "weekday" as const,
    slug: "semana",
    label: "Carta de lunes a sábado",
    subtitle: "Lunes a sábado",
  },
  {
    id: "weekend" as const,
    slug: "domingo",
    label: "Carta de domingo",
    subtitle: "Domingos en Cedrus",
  },
];

export function isMenuId(value: unknown): value is MenuId {
  return value === "weekday" || value === "weekend";
}

export function parseMenus(value: unknown): MenuId[] {
  const list = Array.isArray(value) ? value.filter(isMenuId) : [];
  const unique = [...new Set(list)];
  return unique.length ? unique : ["weekday", "weekend"];
}

export function productMenus(product: Product): MenuId[] {
  return parseMenus(product.menus);
}

export function isOnMenu(product: Product, menu: MenuId) {
  return productMenus(product).includes(menu);
}

export function todayMenu(): MenuId {
  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone: "America/Santiago",
  }).format(new Date());
  return weekday === "Sun" ? "weekend" : "weekday";
}

export function menuMeta(id: MenuId) {
  return MENUS.find((item) => item.id === id) ?? MENUS[0];
}

export function menuPath(id: MenuId) {
  return `/menu/${menuMeta(id).slug}`;
}

export function menuFromSlug(slug: string | undefined): MenuId | null {
  if (slug === "domingo" || slug === "fin-de-semana") return "weekend";
  if (slug === "semana") return "weekday";
  return null;
}

export function menusLabel(menus: MenuId[]) {
  if (menus.includes("weekday") && menus.includes("weekend")) return "Ambas cartas";
  if (menus.includes("weekend")) return "Domingo";
  return "Lunes a sábado";
}
