import { Hero } from "@/components/hero/hero";
import { Container } from "@/components/sections/container";
import { SectionHeading } from "@/components/sections/section-heading";
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
              <div
                key={project.slug}
                className="rounded-lg border border-border p-6"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted">{project.summary}</p>
                <p className="mt-4 text-sm font-medium text-primary">
                  {project.totalViews} views
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20">
        <Container className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-semibold text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
