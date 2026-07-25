"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  label: string;
  value: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
}

export function Tabs({ tabs, defaultValue }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue ?? tabs[0]?.value);

  return (
    <div>
      <div className="flex gap-6 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "border-b-2 px-1 py-3 text-sm font-medium transition-colors",
              activeTab === tab.value
                ? "border-primary text-primary"
                : "border-transparent text-muted hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-6">
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
}
