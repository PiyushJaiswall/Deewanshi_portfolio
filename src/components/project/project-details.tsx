import { Container } from "@/components/sections/container";
import type { Project } from "@/types";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <Container className="py-10">
      <div className="max-w-2xl">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-4 text-muted">{project.summary}</p>
      </div>
    </Container>
  );
}
