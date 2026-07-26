"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { HeroCollage } from "@/components/hero/hero-collage";
import { Container } from "@/components/sections/container";
import { Button } from "@/components/ui/button";

const brands = [
  {
    src: "/assets/brands/Ayatna_logo.svg",
    alt: "Ayatana Resorts",
    width: 135,
  },
  {
    src: "/assets/brands/azora logo.svg",
    alt: "Azora",
    width: 110,
  },
  {
    src: "/assets/brands/kahani logo.svg",
    alt: "Kahani Paradise",
    width: 130,
  },
  {
    src: "/assets/brands/ola logo.svg",
    alt: "OLA",
    width: 80,
  },
  {
    src: "/assets/brands/wow logo.svg",
    alt: "WOW Skin Science",
    width: 120,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-[1.05fr_.95fr]">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .8,
            }}
          >

            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2">

              <span className="mr-2 h-2 w-2 rounded-full bg-primary" />

              <span className="text-sm font-medium">
                Marketing Strategist • Brand Storyteller
              </span>

            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight lg:text-7xl">

              Building

              <span className="block text-primary">
                Brands People
              </span>

              <span className="block">
                Can't Ignore.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">

              I help hospitality, luxury lifestyle and consumer brands
              transform creative ideas into campaigns that increase
              visibility, engagement and measurable business growth.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button size="lg" asChild>
                <Link href="/work">
                  View Selected Work
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link href="/contact">
                  Let's Work Together
                </Link>
              </Button>

            </div>

            <div className="mt-14 flex flex-wrap gap-10">

              <div>

                <h2 className="text-5xl font-bold">
                  20+
                </h2>

                <p className="mt-2 text-muted-foreground">
                  Campaigns
                </p>

              </div>

              <div>

                <h2 className="text-5xl font-bold">
                  6+
                </h2>

                <p className="mt-2 text-muted-foreground">
                  Premium Brands
                </p>

              </div>

              <div>

                <h2 className="text-5xl font-bold">
                  100M+
                </h2>

                <p className="mt-2 text-muted-foreground">
                  Impressions
                </p>

              </div>

            </div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.45em] text-muted-foreground">
                Trusted By
              </p>

              <div className="flex flex-wrap items-center gap-x-10 gap-y-8">

                {brands.map((brand) => (
                  <motion.div
                    key={brand.alt}
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="opacity-70 transition-all duration-300 hover:opacity-100"
                  >
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={brand.width}
                      height={32}
                      className="
                        h-8
                        w-auto
                        object-contain
                        grayscale
                        transition-all
                        duration-300
                        hover:grayscale-0
                      "
                    />
                  </motion.div>
                ))}

              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <HeroCollage />

        </div>

      </Container>

      {/* Background Decoration */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-primary/5 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[140px]" />

      </div>

    </section>
  );
}

            <div className="mt-16">
