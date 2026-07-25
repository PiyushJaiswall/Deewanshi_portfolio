import type { Metadata } from "next";
import { ProjectCard } from "@/components/cards/project-card";
import { Container } from "@/components/sections/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { getAllProjects } from "@/lib/data-fetchers";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description: "Content strategy and social media marketing case studies across hospitality, beauty, and mobility brands.",
  path: "/work",
});

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          subtitle="Case studies from brand collaborations across content strategy, social media marketing, and influencer campaigns."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
