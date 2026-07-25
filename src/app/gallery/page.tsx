import type { Metadata } from "next";
import { Container } from "@/components/sections/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { Lightbox } from "@/components/gallery/lightbox";
import { getAllGallery } from "@/lib/data-fetchers";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description: "A visual showcase of content, campaigns, and creative work across all brand collaborations.",
  path: "/gallery",
});

export default function GalleryPage() {
  const items = getAllGallery();

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Visual Showcase"
          subtitle="A curated look at content created across every brand collaboration."
        />
        <Lightbox items={items} />
      </Container>
    </section>
  );
}
