interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8 border-l border-border pl-8">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-[41px] top-1 h-3 w-3 rounded-full bg-primary" />
          <p className="text-sm font-medium text-primary">{item.year}</p>
          <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
          <p className="mt-1 text-sm text-muted">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
