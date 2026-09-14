import type { ReactNode } from "react";

type Props = {
  categoryId: string;
  className?: string;
};

function Icon({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={`inline-block h-[1em] w-[1em] shrink-0 overflow-visible ${className ?? ""}`}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  );
}

const art: Record<string, ReactNode> = {
  "cat-desayunos": (
    <>
      <ellipse cx="11" cy="14.5" rx="7.5" ry="5.5" />
      <circle cx="11" cy="14.5" r="2.4" />
      <path d="M17 8h4v6h-4z" />
      <path d="M18 10.2h2M18 12h2" />
    </>
  ),
  "cat-cafeteria": (
    <>
      <path d="M6 9h9.5v5.5a3.5 3.5 0 0 1-3.5 3.5H9.5A3.5 3.5 0 0 1 6 14.5V9Z" />
      <path d="M15.5 10.5h2a2 2 0 1 1 0 4h-2" />
      <path d="M8 20h8" />
      <path d="M9 5.5c.6-1.4 1.8-1.6 2.1-.2M12 5c.6-1.5 2-1.6 2.2 0M15 5.5c.5-1.3 1.7-1.4 1.9 0" />
    </>
  ),
  "cat-ensaladas": (
    <>
      <ellipse cx="12" cy="18.5" rx="7.5" ry="2.2" />
      <path d="M5.5 17.5c.4-5 3.2-9 6.5-10.5" />
      <path d="M18.5 17.5c-.4-5-3.2-9-6.5-10.5" />
      <path d="M8.5 17c-.6-3.8 1.6-7 3.5-8" />
      <path d="M15.5 17c.6-3.6-1.4-6.8-3.5-8" />
      <circle cx="15" cy="13" r="1.4" />
      <circle cx="9.2" cy="14" r="1.1" />
    </>
  ),
  "cat-bowls": (
    <>
      <ellipse cx="12" cy="9.5" rx="7" ry="2.4" />
      <path d="M5 9.5h14l-1.4 7.2A5 5 0 0 1 12.6 21h-1.2a5 5 0 0 1-5-4.3L5 9.5Z" />
      <path d="M9 9.2c.8-1.8 3-2.4 3.6-.6M14.5 8.2c1.2.6 1.8 1.8.5 2.4" />
    </>
  ),
  "cat-platos": (
    <>
      <path d="M7 4.5v15" />
      <path d="M5.2 7.5h3.6M5.2 10h3.6" />
      <path d="M17 4.8c2.2 2.4 2.2 6.2 0 8.6" />
      <path d="M17 13.4V19.5" />
      <ellipse cx="12" cy="18.8" rx="8" ry="2" />
    </>
  ),
  "cat-nino": (
    <>
      <circle cx="12" cy="7.5" r="3.2" />
      <path d="M10.6 6.8h.8M12.6 6.8h.8" />
      <path d="M10.6 8.4c.8 1 2 1 2.8 0" />
      <path d="M8 14.5c1.2-2.6 6.8-2.6 8 0v5H8v-5Z" />
      <path d="M8 16.2H5.5M16 16.2h2.5" />
      <path d="M10 19.5v2M14 19.5v2" />
    </>
  ),
  "cat-sandwichs": (
    <>
      <path d="M5 16.5 12 5.5l7 11H5Z" />
      <path d="M6.8 13.6h10.4M8 11h8" />
      <circle cx="10" cy="12.4" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="14" cy="13.2" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  "cat-completos": (
    <>
      <path d="M4 12c1.6-4.2 14.4-4.2 16 0" />
      <path d="M4 12c1.6 4.4 14.4 4.4 16 0" />
      <path d="M6 12c1.2-1.6 10.8-1.6 12 .4" />
      <path d="M7.5 9.4c1.4-1.4 2.8.4 1.7 1.8M11.5 8.4c1.6-1.4 2.6.6 1.4 2M15.5 9.5c1.3-1.3 2.3.6 1 1.7" />
    </>
  ),
  "cat-fajitas": (
    <>
      <path d="M6 16.5c0 2.6 12 2.6 12 0V9.2c0-2.2-12-2.2-12 0v7.3Z" />
      <path d="M6 11.6h12" />
      <path d="M8.4 11.6c1-1.8 3.2-2.1 4.2 0M13.6 11.6c1-1.4 2.8-1.4 3.2.4" />
      <path d="M18 7.6c1.6-1.3 3 0 2.3 1.7" />
    </>
  ),
  "cat-agregados": (
    <>
      <ellipse cx="9" cy="14" rx="4.4" ry="3.3" />
      <circle cx="9" cy="13.8" r="1.3" fill="currentColor" stroke="none" />
      <path d="M14.2 7.5 20 11l-2 5.6-5.8-3.5 2-5.6Z" />
      <path d="M15.4 10.4 18.4 12.2" />
    </>
  ),
  "cat-tablas": (
    <>
      <path d="M4 8h13.5c1.4 0 2.5 1.2 2.5 2.8v6.4c0 1.6-1.1 2.8-2.5 2.8H4V8Z" />
      <path d="M20 12.2h2.4M22.4 10.6v4.4" />
      <ellipse cx="8.4" cy="14.2" rx="2.3" ry="1.6" />
      <path d="M12 11.4 16.4 13l-1.2 3.2-4.4-1.6 1.2-3.2Z" />
    </>
  ),
  "cat-papas": (
    <>
      <path d="M7.5 20h9L15 11H9L7.5 20Z" />
      <path d="M10.2 11V5.2M12 11V4M13.8 11V4.8M15.6 11.2V6.2" />
      <path d="M9 15.4h6" />
    </>
  ),
  "cat-pizzas": (
    <>
      <path d="M12 4.5 20.5 19H3.5L12 4.5Z" />
      <path d="M6.6 13.6h10.8" />
      <circle cx="10.2" cy="11.4" r="1" />
      <circle cx="14" cy="13" r="1" />
      <circle cx="11.4" cy="16.2" r="1" />
    </>
  ),
  "cat-pasteleria": (
    <>
      <path d="M6 16h12v3.5H6z" />
      <path d="M7.2 12h9.6v4H7.2z" />
      <path d="M8.8 8h6.4v4H8.8z" />
      <path d="M12 3.6c1.6 1 0.7 3 0 3.4-1-.3-2-2.2 0-3.4Z" />
      <path d="M6 16c1.4.7 2.8-.6 4.2 0s2.8-.6 4.2 0 2.8-.6 3.6 0" />
    </>
  ),
  "cat-heladeria": (
    <>
      <path d="M9 13.5h6L12 21.5 9 13.5Z" />
      <circle cx="12" cy="7.2" r="2.8" />
      <circle cx="9.4" cy="10.6" r="2.5" />
      <circle cx="14.6" cy="10.6" r="2.5" />
      <path d="M12 4.4c1-1.6 2.4-1 1.7.7" />
    </>
  ),
  "cat-bebidas-jugos": (
    <>
      <path d="M8 5h8l-1.4 14H9.4L8 5Z" />
      <path d="M9.2 11.5h5.6" />
      <path d="M15.2 3.5v5" />
      <circle cx="16.8" cy="6.2" r="1.8" />
    </>
  ),
  "cat-cervezas": (
    <>
      <path d="M9.2 3.5h5.6v3.2H9.2z" />
      <path d="M8.4 6.7h7.2l1.4 2.6v9.2c0 1.6-1.7 2.6-5 2.6s-5-1-5-2.6V9.3l1.4-2.6Z" />
      <rect x="10.2" y="11" width="3.6" height="5" rx="0.4" />
    </>
  ),
  "cat-schop": (
    <>
      <path d="M6.5 7.5h8v9.2a4.2 4.2 0 0 1-4 4.2 4.2 4.2 0 0 1-4-4.2V7.5Z" />
      <path d="M14.5 9.6h2.8a2.6 2.6 0 0 1 0 5.2H14.5" />
      <path d="M7.2 7.5c1.4-2.4 5-2.4 6.6 0" />
      <path d="M8.2 5.6c1.4-1.7 4.2-1.7 5.6 0" />
      <path d="M7 21.2h7" />
    </>
  ),
  "cat-tragos": (
    <>
      <path d="M6.5 5h11L14 13.5H10L6.5 5Z" />
      <path d="M12 13.5V20" />
      <path d="M8.5 20.5h7" />
      <circle cx="15.6" cy="8" r="1.1" />
      <path d="M15.6 9.1v2" />
    </>
  ),
  "cat-sour": (
    <>
      <path d="M7.5 8.5h9v7.4a4 4 0 0 1-4.5 4 4 4 0 0 1-4.5-4V8.5Z" />
      <path d="M7.5 8.5c1.5-2.2 7.5-2.2 9 0" />
      <circle cx="16.8" cy="7" r="1.8" />
      <path d="M8.8 21h6.4" />
    </>
  ),
  "cat-gin": (
    <>
      <path d="M8.5 5h7l-1.1 14H9.6L8.5 5Z" />
      <path d="M9.6 12.4h4.8" />
      <circle cx="12" cy="15.2" r="1.5" />
      <path d="M16.4 8.4c2 1 2 3.6 0 4.4" />
      <path d="M9 21h6" />
    </>
  ),
  "cat-mojitos": (
    <>
      <path d="M8 7.5h8l-1 12.5H9L8 7.5Z" />
      <path d="M9.2 14.8h5.6" />
      <path d="M10.4 3.6c1.7 1.7.4 3.8-.7 4.8M14 3.8c1.4 1.6 0 3.4-1 4.4M12.2 3.2c1.4 1.4.7 3.2 0 4.2" />
      <path d="M15.4 6.2v6.4" />
      <path d="M9 21.2h6" />
    </>
  ),
  "cat-pisco": (
    <>
      <path d="M10 3h4v3c2.2 1.4 2.8 3.2 2.8 5.4v8.2c0 1.6-1.7 2.6-4.8 2.6s-4.8-1-4.8-2.6V11.4C7.2 9.2 7.8 7.4 10 6V3Z" />
      <path d="M10 6h4M10.8 13.6h2.4" />
    </>
  ),
  "cat-whisky": (
    <>
      <path d="M6.5 8.5h11v8.4A3.6 3.6 0 0 1 14 20.5h-4a3.6 3.6 0 0 1-3.5-3.6V8.5Z" />
      <rect x="8.2" y="11.4" width="2.6" height="2.6" rx="0.3" />
      <rect x="12.4" y="12.8" width="2.6" height="2.6" rx="0.3" />
      <path d="M8 21.2h8" />
    </>
  ),
  "cat-vodka": (
    <>
      <path d="M10.2 2.8h3.6v4h-3.6z" />
      <path d="M9 6.8h6l1.4 2.4v9.4c0 1.6-1.7 2.6-4.4 2.6s-4.4-1-4.4-2.6V9.2L9 6.8Z" />
      <path d="M10.6 13.4h2.8" />
    </>
  ),
};

const fallback = (
  <>
    <circle cx="12" cy="12" r="7.5" />
    <circle cx="12" cy="12" r="4.2" />
  </>
);

export function MenuArt({ categoryId, className }: Props) {
  return <Icon className={className}>{art[categoryId] ?? fallback}</Icon>;
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

export function isAlcoholCategory(categoryId: string) {
  return ALCOHOL.has(categoryId);
}

export function isDarkCategory(categoryId: string) {
  return ALCOHOL.has(categoryId) || categoryId === "cat-pizzas";
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
  if (categoryId === "cat-tablas") return "bg-[#d4b896]";
  if (categoryId === "cat-papas") return "bg-[#f5d04a]";
  if (categoryId === "cat-pizzas") return "bg-[#e85a4f]";
  if (categoryId === "cat-heladeria") return "bg-[#c9f0de]";
  if (categoryId === "cat-bebidas-jugos") return "bg-[#e4c9d2]";
  if (ALCOHOL.has(categoryId)) return "bg-black";
  if (categoryId === "cat-pasteleria" || categoryId === "cat-nino") {
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
  if (categoryId === "cat-tablas") return "bg-[#b08968]";
  if (categoryId === "cat-papas") return "bg-[#e6b800]";
  if (categoryId === "cat-pizzas") return "bg-[#c7382c]";
  if (categoryId === "cat-heladeria") return "bg-[#7ecfb0]";
  if (categoryId === "cat-bebidas-jugos") return "bg-[#c47a8a]";
  if (ALCOHOL.has(categoryId)) return "bg-black";
  if (categoryId === "cat-pasteleria" || categoryId === "cat-nino") {
    return "bg-[#f3d4d8]";
  }
  return "";
}
