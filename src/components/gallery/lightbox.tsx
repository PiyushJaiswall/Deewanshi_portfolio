"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/types";

interface LightboxProps {
  items: GalleryItem[];
}

export function Lightbox({ items }: LightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + items.length) % items.length
    );
  const showNext = () =>
    setActiveIndex((prev) => (prev === null ? null : (prev + 1) % items.length));

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={`${item.brand}-${index}`}
            onClick={() => setActiveIndex(index)}
            className="relative aspect-square overflow-hidden rounded-lg bg-muted"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={close}
            className="absolute right-4 top-4 text-white"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            onClick={showPrev}
            className="absolute left-4 text-white"
            aria-label="Previous"
          >
            <ChevronLeft size={32} />
          </button>
          <div className="relative h-[80vh] w-full max-w-3xl">
            <Image
              src={items[activeIndex].image}
              alt={items[activeIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <button
            onClick={showNext}
            className="absolute right-4 text-white"
            aria-label="Next"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
}
