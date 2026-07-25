"use client";

import { useState } from "react";
import { VideoThumbnail } from "@/components/video/video-thumbnail";
import type { Video } from "@/types";

interface VideoPlayerProps {
  videos: Video[];
}

export function VideoPlayer({ videos }: VideoPlayerProps) {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  if (videos.length === 0) return null;

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {videos.map((video, index) => (
          <VideoThumbnail
            key={`${video.brand}-${index}`}
            thumbnail={video.thumbnail}
            views={video.views}
            onClick={() => setActiveVideo(video)}
          />
        ))}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="aspect-[9/16] w-full max-w-sm">
            {activeVideo.source === "external" ? (
              <iframe
                src={activeVideo.url}
                className="h-full w-full rounded-lg"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <video
                src={activeVideo.url}
                controls
                autoPlay
                className="h-full w-full rounded-lg object-cover"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
