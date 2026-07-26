"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    src: "/assets/hero/ayatna_waterfall.webp",
    alt: "Ayatana Resort",
    className:
      "left-0 top-10 h-[320px] w-[240px] rotate-[-6deg] z-20",
  },
  {
    src: "/assets/hero/leela_coorg.webp",
    alt: "The Leela Coorg",
    className:
      "right-0 top-0 h-[220px] w-[220px] rotate-[8deg] z-30",
  },
  {
    src: "/assets/hero/azora_resort.webp",
    alt: "Azora Resort",
    className:
      "left-24 top-64 h-[230px] w-[250px] rotate-[3deg] z-40",
  },
  {
    src: "/assets/hero/wow_event.webp",
    alt: "WOW Campaign",
    className:
      "right-6 top-60 h-[260px] w-[220px] rotate-[-8deg] z-20",
  },
  {
    src: "/assets/hero/ola_campaign.webp",
    alt: "Ola Campaign",
    className:
      "left-2 bottom-0 h-[180px] w-[200px] rotate-[5deg] z-10",
  },
  {
    src: "/assets/hero/kahani-paradise.webp",
    alt: "Kahani Paradise",
    className:
      "right-12 bottom-8 h-[240px] w-[260px] rotate-[-3deg] z-30",
  },
];

export function HeroCollage() {
  return (
    <div className="relative mx-auto hidden h-[700px] w-[560px] lg:block">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      {cards.map((card, index) => (
        <motion.div
          key={card.src}
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: index * 0.12,
            duration: 0.7,
          }}
          whileHover={{
            scale: 1.04,
            y: -10,
            rotate: 0,
          }}
          className={`absolute overflow-hidden rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.18)] ${card.className}`}
        >
          <Image
            src={card.src}
            alt={card.alt}
            fill
            priority
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold backdrop-blur-md">
            {card.alt}
          </div>
        </motion.div>
      ))}

      {/* Floating Experience Card */}
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
          delay: 0.8,
        }}
        whileHover={{
          scale: 1.05,
        }}
        className="absolute left-52 top-80 z-50 rounded-3xl border border-white/30 bg-white/80 px-8 py-6 shadow-2xl backdrop-blur-xl"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
          Campaigns
        </p>

        <h3 className="mt-2 text-4xl font-bold">
          20+
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Brands & Projects
        </p>
      </motion.div>
    </div>
  );
}
