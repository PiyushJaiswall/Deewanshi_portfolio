import { cn } from "@/lib/utils";

interface TagProps {
  label: string;
  className?: string;
}

export function Tag({ label, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted",
        className
      )}
    >
      {label}
    </span>
  );
}
