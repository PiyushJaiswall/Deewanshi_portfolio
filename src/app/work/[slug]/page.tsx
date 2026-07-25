import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectHero } from "@/components/project/project-hero";
import { ProjectDetails } from "@/components/project/project-details";
import { ProjectNav } from "@/components/project/project-nav";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { VideoPlayer } from "@/components/video/video-player";
import { Container } from "@/components/sections/container";
import {
  getAllProjects,
  getProjectBySlug,
  getGalleryByBrand,
  getVideosByBrand,
} from "@/lib/data-fetchers";
import { buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({ title: "Project Not Found" });
  }

  return buildMetadata({
    title: `${project.title} — ${project.brand}`,
    description: project.summary,
    image: project.coverImage,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const previous = allProjects[currentIndex - 1];
  const next = allProjects[currentIndex + 1];

  const gallery = getGalleryByBrand(slug);
  const videos = getVideosByBrand(slug);

  return (
    <>
      <ProjectHero project={project} />
      <ProjectDetails project={project} />

      {videos.length > 0 && (
        <Container className="py-10">
          <h2 className="mb-6 text-xl font-semibold">Videos</h2>
          <VideoPlayer videos={videos} />
        </Container>
      )}

      {gallery.length > 0 && (
        <Container className="py-10">
          <h2 className="mb-6 text-xl font-semibold">Gallery</h2>
          <GalleryGrid items={gallery} />
        </Container>
      )}

      <ProjectNav previous={previous} next={next} />
    </>
  );
}
