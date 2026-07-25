import type { Metadata } from "next";
import { Container } from "@/components/sections/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { CopywritingCard } from "@/components/cards/copywriting-card";
import { getAllCopywriting } from "@/lib/data-fetchers";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Copywriting",
  description: "Copywriting samples and campaign concepts written for Plan B, Tapovana, and other brand collaborations.",
  path: "/copywriting",
});

export default function CopywritingPage() {
  const samples = getAllCopywriting();

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Copywriting"
          title="Words That Sell"
          subtitle="Sample copy and campaign concepts written for real brand launches and promotions."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {samples.map((sample, index) => (
            <CopywritingCard key={`${sample.brand}-${index}`} sample={sample} />
          ))}
        </div>
      </Container>
    </section>
  );
}
