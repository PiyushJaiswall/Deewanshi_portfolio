import projectsData from "@/data/projects.json";
import brandsData from "@/data/brands.json";
import galleryData from "@/data/gallery.json";
import videosData from "@/data/videos.json";
import copywritingData from "@/data/copywriting.json";
import statsData from "@/data/stats.json";
import socialsData from "@/data/socials.json";
import navigationData from "@/data/navigation.json";
import type {
  Project,
  Brand,
  GalleryItem,
  Video,
  CopywritingSample,
  StatItem,
  SocialLink,
  NavigationItem,
} from "@/types";

export function getAllProjects(): Project[] {
  return (projectsData as Project[]).sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find((project) => project.slug === slug);
}

export function getAllBrands(): Brand[] {
  return brandsData as Brand[];
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return (brandsData as Brand[]).find((brand) => brand.slug === slug);
}

export function getGalleryByBrand(brandSlug: string): GalleryItem[] {
  return (galleryData as GalleryItem[])
    .filter((item) => item.brand === brandSlug)
    .sort((a, b) => a.order - b.order);
}

export function getAllGallery(): GalleryItem[] {
  return (galleryData as GalleryItem[]).sort((a, b) => a.order - b.order);
}

export function getVideosByBrand(brandSlug: string): Video[] {
  return (videosData as Video[]).filter((video) => video.brand === brandSlug);
}

export function getAllCopywriting(): CopywritingSample[] {
  return copywritingData as CopywritingSample[];
}

export function getStats(): StatItem[] {
  return statsData as StatItem[];
}

export function getSocials(): SocialLink[] {
  return socialsData as SocialLink[];
}

export function getNavigation(): NavigationItem[] {
  return (navigationData as NavigationItem[]).sort(
    (a, b) => a.order - b.order
  );
}
