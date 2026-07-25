import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import type { Brand } from "@/types";

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border p-4">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted">
        <Image src={brand.logo} alt={brand.name} fill className="object-contain" />
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-medium">{brand.name}</p>
          {brand.verified && (
            <BadgeCheck size={14} className="text-primary" />
          )}
        </div>
        <p className="text-xs text-muted">{brand.category}</p>
      </div>
    </div>
  );
}
