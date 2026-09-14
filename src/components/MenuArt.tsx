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
    <svg
      viewBox="0 0 120 140"
      fill="none"
      aria-hidden
      className={className}
    >
      {children}
    </svg>
  );
}

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function MenuArt({ categoryId, className }: Props) {
  if (
    categoryId === "cat-schop" ||
    categoryId === "cat-cervezas"
  ) {
    return (
      <Svg className={className}>
        <path d="M38 38h34v52c0 12-8 22-17 22s-17-10-17-22V38Z" {...stroke} />
        <path d="M72 48h14c4 0 8 4 8 10s-4 12-8 12H72" {...stroke} />
        <path d="M44 28c6-8 18-8 24 0" {...stroke} />
        <path d="M48 22c4-6 14-6 18 0" {...stroke} />
        <path d="M42 118h36" {...stroke} />
      </Svg>
    );
  }

  if (
    categoryId === "cat-tragos" ||
    categoryId === "cat-sour" ||
    categoryId === "cat-gin" ||
    categoryId === "cat-mojitos"
  ) {
    return (
      <Svg className={className}>
        <path d="M36 28h48L68 72c0 10 8 16 8 16H44s8-6 8-16L36 28Z" {...stroke} />
        <path d="M60 88v28" {...stroke} />
        <path d="M44 124h32" {...stroke} />
        <circle cx="78" cy="40" r="5" {...stroke} />
        <path d="M78 45v10" {...stroke} />
        <path d="M48 44h24" {...stroke} />
      </Svg>
    );
  }

  if (
    categoryId === "cat-pisco" ||
    categoryId === "cat-whisky" ||
    categoryId === "cat-vodka"
  ) {
    return (
      <Svg className={className}>
        <path d="M52 18h16v18H52V18Z" {...stroke} />
        <path d="M48 36h24l8 18v52c0 8-8 14-20 14s-20-6-20-14V54l8-18Z" {...stroke} />
        <path d="M54 70h12" {...stroke} />
        <path d="M50 86h20" {...stroke} />
      </Svg>
    );
  }

  if (categoryId === "cat-pasteleria" || categoryId === "cat-heladeria") {
    return (
      <Svg className={className}>
        <path d="M28 86c4 22 60 22 64 0" {...stroke} />
        <path d="M24 86h72l-6-28H30L24 86Z" {...stroke} />
        <path d="M34 58c8-22 44-22 52 0" {...stroke} />
        <path d="M60 22c8 6 2 16 0 18-4-2-10-12 0-18Z" {...stroke} />
        <circle cx="48" cy="48" r="2.4" fill="currentColor" />
        <circle cx="72" cy="46" r="2.4" fill="currentColor" />
      </Svg>
    );
  }

  if (categoryId === "cat-cafeteria") {
    return (
      <Svg className={className}>
        <path d="M32 48h48v36c0 14-10 24-24 24s-24-10-24-24V48Z" {...stroke} />
        <path d="M80 56h12c6 0 10 6 10 12s-4 14-10 14H80" {...stroke} />
        <path d="M44 36c4-10 10-10 12 0" {...stroke} />
        <path d="M58 34c4-10 10-8 12 2" {...stroke} />
        <path d="M36 118h48" {...stroke} />
      </Svg>
    );
  }

  return (
    <Svg className={className}>
      <path d="M28 96h64L80 44H40L28 96Z" {...stroke} />
      <path d="M40 44c8-16 32-16 40 0" {...stroke} />
      <path d="M48 28c6 4 4 12 2 14" {...stroke} />
    </Svg>
  );
}

export function isBlushCategory(categoryId: string) {
  return (
    categoryId === "cat-schop" ||
    categoryId === "cat-pasteleria" ||
    categoryId === "cat-heladeria" ||
    categoryId === "cat-nino"
  );
}
