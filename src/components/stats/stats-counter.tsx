"use client";

import { useCounter } from "@/hooks/use-counter";
import { useInView } from "@/hooks/use-in-view";

interface StatsCounterProps {
  value: string | number;
  label: string;
}

export function StatsCounter({ value, label }: StatsCounterProps) {
  const { ref, isInView } = useInView();
  const isNumeric = typeof value === "number";
  const count = useCounter(isNumeric ? value : 0, 1500, isInView);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-semibold text-primary">
        {isNumeric ? count : value}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
