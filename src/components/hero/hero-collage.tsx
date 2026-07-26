"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sideImages = [
  {
    src: "/assets/hero/leela_coorg.webp",
    alt: "The Leela Coorg",
  },
  {
    src: "/assets/hero/azora_resort.webp",
    alt: "Azora Resort",
  },
  {
    src: "/assets/hero/wow_event.webp",
    alt: "WOW Campaign",
  },
  {
    src: "/assets/hero/ola_campaign.webp",
    alt: "Ola Campaign",
  },
];

export function HeroCollage() {
  return (
    <div className="relative hidden h-[760px] w-full max-w-[620px] lg:block">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      </div>

      {/* Main Image */}

      <motion.div
        initial={{
          opacity: 0,
          x: -40,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          absolute
          left-0
          top-12
          h-[560px]
          w-[370px]
          overflow-hidden
          rounded-[36px]
          shadow-[0_35px_90px_rgba(0,0,0,.22)]
        "
      >
        <Image
          src="/assets/hero/ayatna_waterfall.webp"
          alt="Ayatana Resorts"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6">

          <p className="text-sm uppercase tracking-[0.3em] text-white/80">
            Luxury Resort
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            Ayatana Resorts
          </h3>

        </div>

      </motion.div>

      {/* Statistics Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .4,
        }}
        className="
          absolute
          bottom-24
          left-56
          z-40
          rounded-[30px]
          bg-white/90
          p-7
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,.18)]
        "
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Campaign Impact
        </p>

        <h3 className="mt-3 text-5xl font-bold text-black">
          20+
        </h3>

        <p className="mt-2 text-sm text-neutral-600">
          High-performing campaigns across hospitality, lifestyle and consumer brands.
        </p>

        <div className="my-6 h-px bg-neutral-200" />

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-2xl font-bold">6+</h4>
            <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">
              Premium Brands
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold">100M+</h4>
            <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">
              Reach
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Image Stack */}

      <div className="absolute right-0 top-8 flex w-[210px] flex-col gap-5">

        {sideImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2 * index + 0.4,
              duration: 0.6,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="group relative h-[150px] overflow-hidden rounded-[26px] shadow-[0_18px_45px_rgba(0,0,0,.18)]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="220px"
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            <div className="absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-lg">
              {image.alt}
            </div>
          </motion.div>
        ))}

      </div>

      {/* Floating Badge */}

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
          delay: 1.2,
        }}
        className="
          absolute
          right-10
          bottom-5
          rounded-full
          border
          border-white/20
          bg-black/75
          px-6
          py-3
          text-white
          backdrop-blur-xl
          shadow-2xl
        "
      >
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

          <span className="text-sm font-medium">
            Available for New Projects
          </span>
        </div>
      </motion.div>

    </div>
  );
}
