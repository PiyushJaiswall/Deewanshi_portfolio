import { StatsCounter } from "@/components/stats/stats-counter";
import type { StatItem } from "@/types";

interface StatsGridProps {
  stats: StatItem[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid gap-8 border-y border-border py-10 sm:grid-cols-3">
      {stats.map((stat) => (
        <StatsCounter key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
