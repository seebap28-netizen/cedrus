"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { HighlightSlide } from "@/lib/highlights";

export function FeaturedRunway({ items }: { items: HighlightSlide[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);
  const holding = useRef(false);

  useEffect(() => {
    const el = scroller.current;
    if (!el || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const tick = () => {
      if (!hovering.current && !holding.current) {
        el.scrollLeft += 0.55;
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const release = () => {
      holding.current = false;
    };
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
    };
  }, [items.length]);

  const slides = [...items, ...items];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-cream to-transparent sm:w-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-cream to-transparent sm:w-10" />
      <div
        ref={scroller}
        className="flex gap-6 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onPointerEnter={() => {
          hovering.current = true;
        }}
        onPointerLeave={() => {
          hovering.current = false;
        }}
        onPointerDown={() => {
          holding.current = true;
        }}
      >
        {slides.map((item, index) => (
          <article
            key={`${item.id}-${index}`}
            className="w-[min(78vw,320px)] shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            <div className="relative h-64">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-widest text-gold">
                {item.category}
              </p>
              <h3 className="font-serif mt-2 text-2xl text-cedar">{item.name}</h3>
              {item.description ? (
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
