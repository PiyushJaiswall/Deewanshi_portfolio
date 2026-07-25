export type ProjectRole =
  | "Content Strategist"
  | "Social Media Marketing"
  | "Influencer Marketing";

export interface Project {
  slug: string;
  brand: string;
  title: string;
  role: ProjectRole;
  coverImage: string;
  thumbnail: string;
  summary: string;
  totalViews: string;
  order: number;
  featured: boolean;
}
