"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "/assets/hero/ayatna_waterfall.webp",
    alt: "Ayatana Resort",
    size: "large",
  },
  {
    src: "/assets/hero/leela_coorg.webp",
    alt: "The Leela Coorg",
    size: "small",
  },
  {
    src: "/assets/hero/azora_resort.webp",
    alt: "Azora Resort",
    size: "medium",
  },
  {
    src: "/assets/hero/wow_event.webp",
    alt: "WOW Skin Science",
    size: "medium",
  },
  {
    src: "/assets/hero/ola_campaign.webp",
    alt: "Ola Campaign",
    size: "small",
  },
  {
    src: "/assets/hero/kahani-paradise.webp",
    alt: "Kahani Paradise",
    size: "large",
  },
];

const sizeClasses = {
  large: "h-[320px]",
  medium: "h-[240px]",
  small: "h-[170px]",
};

export function HeroCollage() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      {/* Background Card */}
      <div className="absolute inset-8 rounded-[40px] bg-gradient-to-br from-primary/5 via-transparent to-primary/10 blur-2xl" />

      <div className="relative grid grid-cols-2 gap-5">
        {/* LEFT COLUMN */}

        <div className="flex flex-col gap-5 pt-10">
          {images
            .filter((_, index) => index % 2 === 0)
            .map((image, index) => (
              <motion.div
                key={image.src}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className={`group relative overflow-hidden rounded-[28px] shadow-2xl ${sizeClasses[image.size]}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(max-width:768px) 100vw,50vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-70" />

                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black backdrop-blur">
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            ))}
        </div>

        {/* RIGHT COLUMN */}

        <div className="flex flex-col gap-5">
          {images
            .filter((_, index) => index % 2 === 1)
            .map((image, index) => (
              <motion.div
                key={image.src}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.18 + 0.2,
                }}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className={`group relative overflow-hidden rounded-[28px] shadow-2xl ${sizeClasses[image.size]}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(max-width:768px) 100vw,50vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-70" />

                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black backdrop-blur">
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Floating Card */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
          className="absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/20 bg-white/80 px-6 py-4 shadow-2xl backdrop-blur-xl lg:block"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Worked With
          </p>

          <p className="mt-2 text-3xl font-bold">20+</p>

          <p className="text-sm text-neutral-500">
            Campaigns Delivered
          </p>
        </motion.div>
      </div>
    </div>
  );
}
