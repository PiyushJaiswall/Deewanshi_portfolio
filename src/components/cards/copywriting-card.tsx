import { Badge } from "@/components/ui/badge";
import type { CopywritingSample } from "@/types";

interface CopywritingCardProps {
  sample: CopywritingSample;
}

export function CopywritingCard({ sample }: CopywritingCardProps) {
  return (
    <div className="rounded-lg border border-border p-6">
      <Badge variant="outline">{sample.brand}</Badge>
      <p className="mt-4 text-lg font-medium leading-relaxed">
        &ldquo;{sample.copy}&rdquo;
      </p>
      <div className="mt-5 border-t border-border pt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-primary">
          Concept
        </p>
        <p className="mt-2 text-sm text-muted">{sample.concept}</p>
      </div>
    </div>
  );
}
