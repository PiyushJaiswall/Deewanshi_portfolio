import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import type { Brand, GalleryItem } from "@/types";

interface InstagramGridProps {
  brand: Brand;
  items: GalleryItem[];
}

export function InstagramGrid({ brand, items }: InstagramGridProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="flex items-center gap-3 border-b border-border p-4">
        <div className="relative h-9 w-9 overflow-hidden rounded-full bg-muted">
          <Image src={brand.logo} alt={brand.name} fill className="object-contain" />
        </div>
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-medium">{brand.instagramHandle}</p>
          {brand.verified && <BadgeCheck size={14} className="text-primary" />}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-0.5 bg-background p-0.5">
        {items.map((item, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
