"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const featuredImage = {
  src: "/assets/hero/ayatna_waterfall.webp",
  alt: "Ayatana Resorts",
  logo: "/assets/brands/Ayatna_logo.svg",
};

const cards = [
  {
    src: "/assets/hero/leela_coorg.webp",
    alt: "The Leela Coorg",
    logo: "/assets/brands/Leela_logo.svg',
    className: "top-0 right-0 h-[185px] w-[210px]",
  },
  {
    src: "/assets/hero/azora_resort.webp",
    alt: "Azora",
    logo: "/assets/brands/azora logo.svg",
    className: "top-[205px] right-0 h-[185px] w-[210px]",
  },
  {
    src: "/assets/hero/wow_event.webp",
    alt: "WOW Skin Science",
    logo: "/assets/brands/wow logo.svg",
    className: "bottom-[145px] right-[110px] h-[145px] w-[155px]",
  },
  {
    src: "/assets/hero/ola_campaign.webp",
    alt: "OLA",
    logo: "/assets/brands/ola logo.svg",
    className: "bottom-[145px] right-0 h-[145px] w-[95px]",
  },
];

export function HeroCollage() {
  return (
    <div className="relative hidden h-[760px] w-full max-w-[640px] lg:block">

      {/* Ambient Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-20 top-24 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[130px]" />

        <div className="absolute right-0 bottom-0 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px]" />

      </div>

      {/* Main Featured Image */}

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
          duration: .8,
        }}
        className="
          absolute
          left-0
          top-10
          h-[565px]
          w-[390px]
          overflow-hidden
          rounded-[38px]
          shadow-[0_45px_100px_rgba(0,0,0,.18)]
        "
      >

        <Image
          src={featuredImage.src}
          alt={featuredImage.alt}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6 rounded-2xl bg-black/35 p-4 backdrop-blur-xl">

          <Image
            src={featuredImage.logo}
            alt="Ayatana Resorts"
            width={150}
            height={42}
            className="h-9 w-auto brightness-0 invert"
          />

        </div>

      </motion.div>

            {/* Floating Statistics Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          delay: 0.35,
          duration: 0.7,
        }}
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
        className="
          absolute
          left-[240px]
          top-[430px]
          z-40
          w-[290px]
          overflow-hidden
          rounded-[30px]
          border
          border-white/20
          bg-white/90
          p-8
          backdrop-blur-2xl
          shadow-[0_30px_80px_rgba(0,0,0,.18)]
        "
      >

        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/20 to-transparent" />

        <div className="relative">

          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Portfolio
          </span>

          <h2 className="mt-5 text-5xl font-black tracking-tight text-neutral-900">
            20+
          </h2>

          <p className="mt-2 text-sm leading-6 text-neutral-600">
            Campaigns executed for premium hospitality, lifestyle and
            consumer brands.
          </p>

          <div className="my-7 h-px bg-neutral-200" />

          <div className="grid grid-cols-2 gap-6">

            <div>

              <h3 className="text-3xl font-bold text-neutral-900">
                6+
              </h3>

              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-neutral-500">
                Brands
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-neutral-900">
                100M+
              </h3>

              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-neutral-500">
                Reach
              </p>

            </div>

          </div>

        </div>

      </motion.div>

      {/* Right Editorial Grid */}

      <div className="absolute inset-0">

        {cards.map((card, index) => (

          <motion.div
            key={card.src}
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.25 + index * 0.12,
              duration: 0.6,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className={`group absolute overflow-hidden rounded-[28px] shadow-[0_22px_55px_rgba(0,0,0,.16)] ${card.className}`}
          >

            <Image
              src={card.src}
              alt={card.alt}
              fill
              sizes="220px"
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-3 left-3 rounded-xl bg-black/40 p-2 backdrop-blur-xl">

                            {card.logo ? (
                <Image
                  src={card.logo}
                  alt={card.alt}
                  width={90}
                  height={28}
                  className="h-6 w-auto brightness-0 invert"
                />
              ) : (
                <span className="text-xs font-medium text-white">
                  {card.alt}
                </span>
              )}

            </div>

          </motion.div>

        ))}

      </div>

      {/* Floating Kahani Feature */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          delay: 0.9,
          duration: 0.7,
        }}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        className="
          absolute
          bottom-0
          left-14
          z-30
          h-[175px]
          w-[300px]
          overflow-hidden
          rounded-[30px]
          shadow-[0_30px_70px_rgba(0,0,0,.20)]
        "
      >

        <Image
          src="/assets/hero/kahani-paradise.webp"
          alt="Kahani Paradise"
          fill
          sizes="300px"
          className="object-cover transition duration-700 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/15 to-transparent" />

        <div className="absolute left-5 top-5 rounded-2xl bg-black/35 p-3 backdrop-blur-xl">

          <Image
            src="/assets/brands/kahani logo.svg"
            alt="Kahani Paradise"
            width={120}
            height={36}
            className="h-7 w-auto brightness-0 invert"
          />

        </div>

      </motion.div>

      {/* Floating Availability Badge */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 1.15,
          duration: 0.6,
        }}
        className="
          absolute
          right-6
          bottom-12
          z-50
          rounded-full
          border
          border-white/20
          bg-black/80
          px-6
          py-3
          backdrop-blur-xl
          shadow-[0_20px_50px_rgba(0,0,0,.35)]
        "
      >

        <div className="flex items-center gap-3">

          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

          <span className="text-sm font-medium text-white">
            Available for New Projects
          </span>

        </div>

      </motion.div>

      {/* Decorative Elements */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 1.3,
        }}
        className="
          absolute
          right-48
          top-6
          h-5
          w-5
          rounded-full
          bg-primary
          shadow-[0_0_45px_rgba(59,130,246,.5)]
        "
      />

            <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 1.45,
        }}
        className="
          absolute
          left-10
          top-[340px]
          h-4
          w-4
          rounded-full
          bg-amber-400
          shadow-[0_0_35px_rgba(251,191,36,.5)]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          rotate: -10,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
        }}
        transition={{
          delay: 1.6,
          duration: 0.7,
        }}
        className="
          absolute
          right-[230px]
          top-[165px]
          z-20
          rounded-2xl
          border
          border-white/20
          bg-white/90
          px-5
          py-4
          shadow-[0_20px_60px_rgba(0,0,0,.15)]
          backdrop-blur-xl
        "
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Experience
        </p>

        <h3 className="mt-2 text-3xl font-black text-neutral-900">
          5+
        </h3>

        <p className="mt-1 text-sm text-neutral-600">
          Industries Served
        </p>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.75,
          duration: 0.6,
        }}
        className="
          absolute
          left-[70px]
          top-[70px]
          z-20
          rounded-full
          border
          border-white/20
          bg-white/90
          px-5
          py-3
          shadow-[0_15px_45px_rgba(0,0,0,.15)]
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">

          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

          <span className="text-sm font-semibold text-neutral-800">
            Strategy • Content • Performance
          </span>

        </div>

      </motion.div>

      {/* Glass Overlay */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[40px]
          bg-gradient-to-br
          from-white/5
          via-transparent
          to-white/5
        "
      />

      {/* Soft Border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[40px]
          ring-1
          ring-white/10
        "
      />

            {/* Ambient Highlight */}

      <div
        className="
          pointer-events-none
          absolute
          -left-20
          bottom-0
          h-[260px]
          w-[260px]
          rounded-full
          bg-primary/5
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          top-0
          h-[220px]
          w-[220px]
          rounded-full
          bg-sky-400/10
          blur-[90px]
        "
      />

    </div>
  );
}
