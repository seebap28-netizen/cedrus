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
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const art: Record<string, ReactNode> = {
  "cat-desayunos": (
    <>
      <ellipse cx="52" cy="78" rx="34" ry="26" {...s} />
      <circle cx="52" cy="78" r="12" {...s} />
      <circle cx="52" cy="78" r="6" fill="currentColor" />
      <path d="M86 48h22v32H86z" {...s} />
      <path d="M90 58h14" {...s} />
      <path d="M90 68h14" {...s} />
    </>
  ),
  "cat-cafeteria": (
    <>
      <path d="M30 50h52v38c0 16-12 26-26 26S30 104 30 88V50Z" {...s} />
      <path d="M82 58h14a12 12 0 0 1 0 24H82" {...s} />
      <ellipse cx="56" cy="122" rx="28" ry="6" {...s} />
      <path d="M42 34c3-8 10-10 12-2" {...s} />
      <path d="M56 32c3-8 11-9 12 0" {...s} />
      <path d="M70 34c3-7 10-8 11 1" {...s} />
    </>
  ),
  "cat-ensaladas": (
    <>
      <ellipse cx="60" cy="108" rx="40" ry="12" {...s} />
      <path d="M24 104h72" {...s} />
      <path d="M38 104c-2-28 10-52 22-58" {...s} />
      <path d="M82 104c2-28-10-50-22-58" {...s} />
      <path d="M50 100c-8-24 4-44 16-48" {...s} />
      <path d="M70 100c8-22-2-42-14-48" {...s} />
      <circle cx="74" cy="78" r="7" {...s} />
      <circle cx="48" cy="82" r="5" {...s} />
    </>
  ),
  "cat-bowls": (
    <>
      <ellipse cx="60" cy="58" rx="38" ry="16" {...s} />
      <path d="M22 58h76l-8 40c-4 14-22 22-30 22s-26-8-30-22L22 58Z" {...s} />
      <path d="M40 58c4-10 16-16 20-8" {...s} />
      <path d="M68 50c8 4 12 12 4 16" {...s} />
      <circle cx="58" cy="62" r="5" {...s} />
    </>
  ),
  "cat-platos": (
    <>
      <ellipse cx="60" cy="82" rx="42" ry="30" {...s} />
      <ellipse cx="60" cy="82" rx="26" ry="16" {...s} />
      <path d="M48 80c10-8 22-4 26 8" {...s} />
      <path d="M16 36v40" {...s} />
      <path d="M12 48h8" {...s} />
      <path d="M12 58h8" {...s} />
      <path d="M104 34l8 8-18 22" {...s} />
    </>
  ),
  "cat-nino": (
    <>
      <circle cx="60" cy="40" r="16" {...s} />
      <path d="M52 36h4" {...s} />
      <path d="M64 36h4" {...s} />
      <path d="M52 46c4 6 12 6 16 0" {...s} />
      <path d="M60 56v8" {...s} />
      <path d="M38 92c6-16 38-16 44 0v24H38V92Z" {...s} />
      <path d="M46 116v14" {...s} />
      <path d="M74 116v14" {...s} />
      <path d="M38 100H24" {...s} />
      <path d="M82 100h14" {...s} />
    </>
  ),
  "cat-sandwichs": (
    <>
      <path d="M22 96L60 30l38 66H22Z" {...s} />
      <path d="M30 82h60" {...s} />
      <path d="M36 68h48" {...s} />
      <circle cx="52" cy="74" r="4" fill="currentColor" />
      <circle cx="72" cy="78" r="4" fill="currentColor" />
    </>
  ),
  "cat-completos": (
    <>
      <path d="M18 70c8-22 76-22 84 0" {...s} />
      <path d="M18 70c8 24 76 24 84 0" {...s} />
      <path d="M28 70c6-8 58-8 64 2" {...s} />
      <path d="M34 56c8-8 16 2 10 10" {...s} />
      <path d="M56 50c10-8 16 4 8 12" {...s} />
      <path d="M78 56c8-8 14 4 6 10" {...s} />
    </>
  ),
  "cat-fajitas": (
    <>
      <path d="M28 88c0 18 64 18 64 0V52c0-12-64-12-64 0v36Z" {...s} />
      <path d="M28 64h64" {...s} />
      <path d="M40 64c6-10 18-12 24 0" {...s} />
      <path d="M68 64c6-8 16-8 18 2" {...s} />
      <path d="M92 44c10-8 18 0 14 10" {...s} />
    </>
  ),
  "cat-agregados": (
    <>
      <ellipse cx="44" cy="78" rx="22" ry="16" {...s} />
      <circle cx="44" cy="76" r="7" fill="currentColor" />
      <path d="M72 48l28 16-10 28-28-16 10-28Z" {...s} />
      <path d="M78 62l16 10" {...s} />
    </>
  ),
  "cat-tablas": (
    <>
      <path d="M18 50h70c6 0 10 6 10 14v36c0 8-4 14-10 14H18V50Z" {...s} />
      <path d="M98 72h14" {...s} />
      <path d="M112 64v28" {...s} />
      <ellipse cx="40" cy="86" rx="12" ry="8" {...s} />
      <path d="M58 74l22 8-6 16-22-8 6-16Z" {...s} />
    </>
  ),
  "cat-papas": (
    <>
      <path d="M36 122h48L76 70H44L36 122Z" {...s} />
      <path d="M50 70V28" {...s} />
      <path d="M60 70V22" {...s} />
      <path d="M70 70V26" {...s} />
      <path d="M80 72V34" {...s} />
      <path d="M44 92h32" {...s} />
    </>
  ),
  "cat-pizzas": (
    <>
      <circle cx="60" cy="76" r="40" {...s} />
      <path d="M60 36v80" {...s} />
      <path d="M24 64l72 24" {...s} />
      <path d="M24 88l72-24" {...s} />
      <circle cx="48" cy="62" r="5" {...s} />
      <circle cx="74" cy="70" r="5" {...s} />
      <circle cx="58" cy="94" r="5" {...s} />
    </>
  ),
  "cat-pasteleria": (
    <>
      <path d="M28 92h64v20H28z" {...s} />
      <path d="M34 68h52v24H34z" {...s} />
      <path d="M42 46h36v22H42z" {...s} />
      <path d="M60 22c10 6 4 18 0 20-6-2-12-14 0-20Z" {...s} />
      <circle cx="60" cy="22" r="4" fill="currentColor" />
      <path d="M28 92c8 4 16-4 24 0s16-4 24 0 16-4 16 0" {...s} />
    </>
  ),
  "cat-heladeria": (
    <>
      <path d="M44 82h32L60 132 44 82Z" {...s} />
      <circle cx="60" cy="46" r="16" {...s} />
      <circle cx="46" cy="66" r="14" {...s} />
      <circle cx="74" cy="66" r="14" {...s} />
      <path d="M60 26c6-10 14-6 10 4" {...s} />
    </>
  ),
  "cat-bebidas-jugos": (
    <>
      <path d="M38 34h44l-8 86H46L38 34Z" {...s} />
      <path d="M44 72h32" {...s} />
      <path d="M78 22v28" {...s} />
      <circle cx="86" cy="38" r="10" {...s} />
      <path d="M86 28v20" {...s} />
    </>
  ),
  "cat-cervezas": (
    <>
      <path d="M48 18h24v18H48z" {...s} />
      <path d="M44 36h32l8 16v58c0 10-10 16-24 16s-24-6-24-16V52l8-16Z" {...s} />
      <rect x="50" y="64" width="20" height="28" rx="2" {...s} />
    </>
  ),
  "cat-schop": (
    <>
      <path d="M32 42h42v54c0 16-10 26-21 26S32 112 32 96V42Z" {...s} />
      <path d="M74 54h16c8 0 14 8 14 16s-6 18-14 18H74" {...s} />
      <path d="M36 42c8-14 28-14 38 0" {...s} />
      <path d="M42 32c8-10 24-10 32 0" {...s} />
      <path d="M36 126h34" {...s} />
    </>
  ),
  "cat-tragos": (
    <>
      <path d="M30 28h60L68 78H52L30 28Z" {...s} />
      <path d="M60 78v36" {...s} />
      <path d="M42 122h36" {...s} />
      <circle cx="80" cy="44" r="6" {...s} />
      <path d="M80 50v12" {...s} />
    </>
  ),
  "cat-sour": (
    <>
      <path d="M36 48h48v46c0 14-10 22-24 22s-24-8-24-22V48Z" {...s} />
      <path d="M36 48c8-12 40-12 48 0" {...s} />
      <circle cx="86" cy="40" r="10" {...s} />
      <path d="M86 30v20" {...s} />
      <path d="M44 124h32" {...s} />
    </>
  ),
  "cat-gin": (
    <>
      <path d="M42 28h36l-6 86H48L42 28Z" {...s} />
      <path d="M48 74h24" {...s} />
      <circle cx="60" cy="90" r="8" {...s} />
      <path d="M60 82v16" {...s} />
      <path d="M82 46c12 6 12 22 0 26" {...s} />
      <path d="M44 124h32" {...s} />
    </>
  ),
  "cat-mojitos": (
    <>
      <path d="M40 40h40l-6 78H46L40 40Z" {...s} />
      <path d="M46 86h28" {...s} />
      <path d="M54 18c10 10 2 22-4 28" {...s} />
      <path d="M70 20c8 10 0 20-6 26" {...s} />
      <path d="M62 16c8 8 4 18 0 24" {...s} />
      <path d="M78 34v40" {...s} />
      <path d="M44 126h32" {...s} />
    </>
  ),
  "cat-pisco": (
    <>
      <path d="M50 16h20v16c12 8 16 18 16 30v54c0 10-10 16-26 16s-26-6-26-16V62c0-12 4-22 16-30V16Z" {...s} />
      <path d="M50 32h20" {...s} />
      <path d="M54 78h12" {...s} />
    </>
  ),
  "cat-whisky": (
    <>
      <path d="M32 50h56v52c0 12-12 20-28 20s-28-8-28-20V50Z" {...s} />
      <rect x="42" y="70" width="14" height="14" rx="1" {...s} />
      <rect x="64" y="78" width="14" height="14" rx="1" {...s} />
      <rect x="52" y="90" width="14" height="12" rx="1" {...s} />
      <path d="M40 126h40" {...s} />
    </>
  ),
  "cat-vodka": (
    <>
      <path d="M52 12h16v24H52z" {...s} />
      <path d="M46 36h28l8 14v66c0 10-10 16-22 16s-22-6-22-16V50l8-14Z" {...s} />
      <path d="M54 76h12" {...s} />
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
