import type { Metadata } from "next";
import { Container } from "@/components/sections/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { Timeline } from "@/components/ui/timeline";
import { StatsGrid } from "@/components/stats/stats-grid";
import { getStats } from "@/lib/data-fetchers";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Social Media Marketer and Content Strategist with experience across hospitality, beauty, and F&B brands.",
  path: "/about",
});

const timelineItems = [
  {
    year: "2022",
    title: "Class 12 - Commerce",
    description: "Built a strong foundation in business and marketing concepts.",
  },
  {
    year: "2025",
    title: "BBA, Alliance University",
    description: "Sharpened skills in marketing, management, and digital strategy.",
  },
  {
    year: "2025 - Present",
    title: "Content Strategist & Social Media Marketer",
    description: "Curated content strategies for Ayatana Resorts, Kahani, Plan B, and more.",
  },
];

export default function AboutPage() {
  const stats = getStats();

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="Hey, I'm Deewanshi Khandal"
          subtitle="A passionate Social Media Marketer and Content Strategist who lives and breathes digital creativity. I love turning ideas into impactful content that connects, converts, and builds communities."
        />
        <StatsGrid stats={stats} />
        <div className="mt-16">
          <Timeline items={timelineItems} />
        </div>
      </Container>
    </section>
  );
}
