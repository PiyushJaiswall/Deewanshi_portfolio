"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "@/components/buttons/icon-button";

interface CarouselProps {
  items: React.ReactNode[];
}

export function Carousel({ items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrev = () =>
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  const showNext = () =>
    setActiveIndex((prev) => (prev + 1) % items.length);

  if (items.length === 0) return null;

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">{items[activeIndex]}</div>

      <div className="mt-4 flex items-center justify-between">
        <IconButton icon={<ChevronLeft size={18} />} label="Previous" onClick={showPrev} />
        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 w-6 rounded-full transition-colors ${
                index === activeIndex ? "bg-primary" : "bg-border"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <IconButton icon={<ChevronRight size={18} />} label="Next" onClick={showNext} />
      </div>
    </div>
  );
}
