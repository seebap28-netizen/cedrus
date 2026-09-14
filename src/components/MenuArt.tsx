import type { ReactNode } from "react";

type Props = {
  categoryId: string;
  className?: string;
};

function Svg({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 120 140" fill="none" aria-hidden className={className}>
      {children}
    </svg>
  );
}

const s = {
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const art: Record<string, ReactNode> = {
  "cat-desayunos": (
    <>
      <ellipse cx="46" cy="86" rx="28" ry="18" {...s} />
      <ellipse cx="46" cy="82" rx="12" ry="9" {...s} />
      <circle cx="46" cy="82" r="5" fill="currentColor" />
      <path d="M78 54h22v36H78V54Z" {...s} />
      <path d="M82 66h14" {...s} />
      <path d="M82 76h14" {...s} />
      <path d="M38 48c8-10 22-8 24 4" {...s} />
    </>
  ),
  "cat-cafeteria": (
    <>
      <path d="M32 48h48v36c0 14-10 24-24 24s-24-10-24-24V48Z" {...s} />
      <path d="M80 56h12c6 0 10 6 10 12s-4 14-10 14H80" {...s} />
      <path d="M44 36c4-10 10-10 12 0" {...s} />
      <path d="M58 34c4-10 10-8 12 2" {...s} />
      <path d="M36 118h48" {...s} />
    </>
  ),
  "cat-ensaladas": (
    <>
      <ellipse cx="60" cy="102" rx="38" ry="14" {...s} />
      <path d="M28 100c4-28 20-48 32-54" {...s} />
      <path d="M92 100c-6-30-22-48-34-54" {...s} />
      <path d="M48 92c-4-22 8-40 18-44" {...s} />
      <path d="M70 90c6-20-4-38-14-44" {...s} />
      <path d="M60 52c8 6 6 18 2 22" {...s} />
      <circle cx="72" cy="78" r="4" {...s} />
      <circle cx="50" cy="82" r="3.5" {...s} />
    </>
  ),
  "cat-bowls": (
    <>
      <path d="M24 70h72l-8 34c-4 12-20 18-28 18s-24-6-28-18L24 70Z" {...s} />
      <path d="M32 70c6-16 50-16 56 0" {...s} />
      <path d="M44 58c8-14 24-12 28 2" {...s} />
      <path d="M88 42l18-16" {...s} />
      <path d="M94 48l18-12" {...s} />
    </>
  ),
  "cat-platos": (
    <>
      <ellipse cx="60" cy="78" rx="40" ry="28" {...s} />
      <ellipse cx="60" cy="78" rx="24" ry="16" {...s} />
      <path d="M48 74c8-6 18-4 24 4" {...s} />
      <path d="M18 40l10 8-4 12" {...s} />
      <path d="M102 38v28" {...s} />
      <path d="M98 44h8" {...s} />
    </>
  ),
  "cat-nino": (
    <>
      <circle cx="60" cy="44" r="14" {...s} />
      <path d="M60 58v10" {...s} />
      <path d="M42 86c4-14 32-14 36 0v22H42V86Z" {...s} />
      <path d="M48 118v10" {...s} />
      <path d="M72 118v10" {...s} />
      <path d="M42 96H28" {...s} />
      <path d="M78 96h14" {...s} />
      <path d="M78 32c10-8 18 2 12 10" {...s} />
    </>
  ),
  "cat-sandwichs": (
    <>
      <path d="M24 86c4 18 68 18 72 0" {...s} />
      <path d="M22 86h76L86 62H34L22 86Z" {...s} />
      <path d="M34 62h52l-6-18H40L34 62Z" {...s} />
      <path d="M40 44c10-16 30-16 40 0" {...s} />
      <path d="M46 70h28" {...s} />
      <circle cx="52" cy="54" r="3" fill="currentColor" />
      <circle cx="70" cy="52" r="3" fill="currentColor" />
    </>
  ),
  "cat-completos": (
    <>
      <path d="M22 78c8 18 68 18 76 0" {...s} />
      <path d="M22 78c6-16 70-16 76 0" {...s} />
      <path d="M30 74c8-8 52-8 60 4" {...s} />
      <path d="M38 62c6-4 12 2 8 8" {...s} />
      <path d="M58 58c8-6 14 4 8 10" {...s} />
      <path d="M78 62c6-6 12 2 6 8" {...s} />
    </>
  ),
  "cat-fajitas": (
    <>
      <path d="M28 96c8 16 56 16 64 0L78 40 42 48 28 96Z" {...s} />
      <path d="M42 48c10-8 28-12 36-8" {...s} />
      <path d="M48 70c10-4 22-6 30 0" {...s} />
      <path d="M46 82h28" {...s} />
      <path d="M86 36c8-10 18-6 16 6" {...s} />
    </>
  ),
  "cat-agregados": (
    <>
      <circle cx="44" cy="58" r="18" {...s} />
      <circle cx="78" cy="58" r="18" {...s} />
      <circle cx="61" cy="92" r="18" {...s} />
      <path d="M44 52v12" {...s} />
      <path d="M38 58h12" {...s} />
      <path d="M78 52v12" {...s} />
      <path d="M72 58h12" {...s} />
      <path d="M61 86v12" {...s} />
      <path d="M55 92h12" {...s} />
    </>
  ),
  "cat-tablas": (
    <>
      <rect x="22" y="48" width="76" height="52" rx="6" {...s} />
      <path d="M22 70h76" {...s} />
      <ellipse cx="44" cy="86" rx="10" ry="7" {...s} />
      <path d="M62 80h24v14H62z" {...s} />
      <path d="M38 58h16" {...s} />
      <path d="M68 58h18" {...s} />
      <path d="M98 62h10" {...s} />
    </>
  ),
  "cat-papas": (
    <>
      <path d="M40 118h40l-6-52H46L40 118Z" {...s} />
      <path d="M50 66l-4-28" {...s} />
      <path d="M58 66l2-34" {...s} />
      <path d="M66 66l6-30" {...s} />
      <path d="M74 68l8-26" {...s} />
      <path d="M44 90h32" {...s} />
    </>
  ),
  "cat-pizzas": (
    <>
      <path d="M60 22l40 90H20L60 22Z" {...s} />
      <path d="M36 78h48" {...s} />
      <path d="M46 54h28" {...s} />
      <circle cx="54" cy="68" r="4" {...s} />
      <circle cx="70" cy="90" r="4" {...s} />
      <circle cx="48" cy="96" r="3.5" {...s} />
    </>
  ),
  "cat-pasteleria": (
    <>
      <path d="M28 86c4 22 60 22 64 0" {...s} />
      <path d="M24 86h72l-6-28H30L24 86Z" {...s} />
      <path d="M34 58c8-22 44-22 52 0" {...s} />
      <path d="M60 22c8 6 2 16 0 18-4-2-10-12 0-18Z" {...s} />
      <circle cx="48" cy="48" r="2.4" fill="currentColor" />
      <circle cx="72" cy="46" r="2.4" fill="currentColor" />
    </>
  ),
  "cat-heladeria": (
    <>
      <path d="M48 78h24L60 128 48 78Z" {...s} />
      <path d="M42 78c0-22 36-22 36 0" {...s} />
      <circle cx="48" cy="62" r="12" {...s} />
      <circle cx="72" cy="62" r="12" {...s} />
      <circle cx="60" cy="48" r="13" {...s} />
      <path d="M60 28c4-8 12-6 10 2" {...s} />
    </>
  ),
  "cat-bebidas-jugos": (
    <>
      <path d="M40 36h40l-8 80H48L40 36Z" {...s} />
      <path d="M46 70h28" {...s} />
      <path d="M78 28c8 10 18 8 16-2" {...s} />
      <path d="M72 24v20" {...s} />
      <circle cx="52" cy="52" r="4" {...s} />
    </>
  ),
  "cat-cervezas": (
    <>
      <path d="M50 22h20v16H50V22Z" {...s} />
      <path d="M46 38h28l6 14v58c0 8-8 14-20 14s-20-6-20-14V52l6-14Z" {...s} />
      <path d="M52 70h16" {...s} />
    </>
  ),
  "cat-schop": (
    <>
      <path d="M38 38h34v52c0 12-8 22-17 22s-17-10-17-22V38Z" {...s} />
      <path d="M72 48h14c4 0 8 4 8 10s-4 12-8 12H72" {...s} />
      <path d="M44 28c6-8 18-8 24 0" {...s} />
      <path d="M48 22c4-6 14-6 18 0" {...s} />
      <path d="M42 118h36" {...s} />
    </>
  ),
  "cat-tragos": (
    <>
      <path d="M36 28h48L68 72c0 10 8 16 8 16H44s8-6 8-16L36 28Z" {...s} />
      <path d="M60 88v28" {...s} />
      <path d="M44 124h32" {...s} />
      <circle cx="78" cy="40" r="5" {...s} />
      <path d="M78 45v10" {...s} />
      <path d="M48 44h24" {...s} />
    </>
  ),
  "cat-sour": (
    <>
      <path d="M38 36h44v52c0 16-10 28-22 28s-22-12-22-28V36Z" {...s} />
      <path d="M42 58h36" {...s} />
      <path d="M48 28c8-8 16-8 24 0" {...s} />
      <path d="M44 124h32" {...s} />
    </>
  ),
  "cat-gin": (
    <>
      <path d="M44 30h32l-4 78H48L44 30Z" {...s} />
      <path d="M48 70h24" {...s} />
      <circle cx="60" cy="82" r="5" {...s} />
      <path d="M78 44c10 4 12 16 4 20" {...s} />
      <path d="M44 122h32" {...s} />
    </>
  ),
  "cat-mojitos": (
    <>
      <path d="M42 40h36l-6 76H48L42 40Z" {...s} />
      <path d="M48 78h24" {...s} />
      <path d="M58 24c8 8 2 18-2 22" {...s} />
      <path d="M70 28c6 8 0 16-4 20" {...s} />
      <path d="M78 36c8-2 14 8 6 14" {...s} />
      <path d="M44 124h32" {...s} />
    </>
  ),
  "cat-pisco": (
    <>
      <path d="M52 16h16v14c8 6 12 14 12 24v62c0 8-8 14-20 14s-20-6-20-14V54c0-10 4-18 12-24V16Z" {...s} />
      <path d="M52 30h16" {...s} />
    </>
  ),
  "cat-whisky": (
    <>
      <path d="M36 48h48v52c0 12-10 20-24 20s-24-8-24-20V48Z" {...s} />
      <path d="M44 72h10v10H44z" {...s} />
      <path d="M66 80h10v10H66z" {...s} />
      <path d="M52 92h12v8H52z" {...s} />
      <path d="M44 124h32" {...s} />
    </>
  ),
  "cat-vodka": (
    <>
      <path d="M54 14h12v20H54V14Z" {...s} />
      <path d="M48 34h24l6 12v64c0 8-8 14-18 14s-18-6-18-14V46l6-12Z" {...s} />
      <path d="M54 70h12" {...s} />
    </>
  ),
};

export function MenuArt({ categoryId, className }: Props) {
  return <Svg className={className}>{art[categoryId] ?? art["cat-platos"]}</Svg>;
}

export function isBlushCategory(categoryId: string) {
  return (
    categoryId === "cat-schop" ||
    categoryId === "cat-pasteleria" ||
    categoryId === "cat-heladeria" ||
    categoryId === "cat-nino"
  );
}
