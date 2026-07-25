import { Hero } from "@/components/hero/hero";
import { Container } from "@/components/sections/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { ProjectCard } from "@/components/cards/project-card";
import { StatsGrid } from "@/components/stats/stats-grid";
import { getFeaturedProjects, getStats } from "@/lib/data-fetchers";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const stats = getStats();

  return (
    <>
      <Hero />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Selected Work"
            title="Brands I've Collaborated With"
            subtitle="Content strategy, social media marketing, and influencer campaigns across hospitality, beauty, and mobility."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20">
        <Container>
          <StatsGrid stats={stats} />
        </Container>
      </section>
    </>
  );
}
