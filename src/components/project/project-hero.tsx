import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/sections/container";
import type { Project } from "@/types";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>
      <Container className="relative -mt-16 pb-10">
        <Badge variant="outline">{project.role}</Badge>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-2 text-sm font-medium text-primary">
          {project.totalViews} total views
        </p>
      </Container>
    </section>
  );
}
