import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/sections/container";
import type { Project } from "@/types";

interface ProjectNavProps {
  previous?: Project;
  next?: Project;
}

export function ProjectNav({ previous, next }: ProjectNavProps) {
  return (
    <Container className="flex items-center justify-between border-t border-border py-10">
      {previous ? (
        <Link
          href={`/work/${previous.slug}`}
          className="flex items-center gap-2 text-sm text-muted hover:text-primary"
        >
          <ArrowLeft size={16} />
          {previous.title}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/work/${next.slug}`}
          className="flex items-center gap-2 text-sm text-muted hover:text-primary"
        >
          {next.title}
          <ArrowRight size={16} />
        </Link>
      ) : (
        <span />
      )}
    </Container>
  );
}
