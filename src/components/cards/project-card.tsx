import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block overflow-hidden rounded-lg border border-border transition-colors hover:border-primary"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <Badge variant="outline">{project.role}</Badge>
        <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.summary}</p>
        <p className="mt-4 text-sm font-medium text-primary">
          {project.totalViews} views
        </p>
      </div>
    </Link>
  );
}
