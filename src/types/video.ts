export type VideoSource = "local" | "external";

export interface Video {
  brand: string;
  source: VideoSource;
  url: string;
  thumbnail: string;
  views: string;
}
