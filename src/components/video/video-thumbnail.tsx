import Image from "next/image";
import { Play } from "lucide-react";

interface VideoThumbnailProps {
  thumbnail: string;
  views: string;
  onClick?: () => void;
}

export function VideoThumbnail({ thumbnail, views, onClick }: VideoThumbnailProps) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-lg bg-muted"
    >
      <Image
        src={thumbnail}
        alt="Video thumbnail"
        fill
        sizes="(min-width: 640px) 25vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
        <Play size={32} className="fill-white text-white" />
      </div>
      <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
        {views} views
      </span>
    </button>
  );
}
