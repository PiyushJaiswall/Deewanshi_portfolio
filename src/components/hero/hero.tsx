"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/sections/container";
import { Button } from "@/components/ui/button";
import { HeroCollage } from "@/components/hero/hero-collage";
import { ANIMATION } from "@/lib/constants";

const brands = [
  "Ayatana",
  "Azora",
  "Leela",
  "Kahani",
  "WOW",
  "OLA",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <Container className="relative">
        <div className="grid min-h-screen items-center gap-16 py-24 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION.durationFast,
                ease: ANIMATION.easeDefault,
              }}
              className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium tracking-wide text-primary"
            >
              Creative Marketing Strategist
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: ANIMATION.durationSlow,
                ease: ANIMATION.easeDefault,
              }}
              className="mt-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl xl:text-7xl"
            >
              Building Brands
              <br />
              <span className="text-primary">
                People Can't
              </span>
              <br />
              Stop Scrolling.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: ANIMATION.durationSlow,
                ease: ANIMATION.easeDefault,
              }}
              className="mt-8 max-w-xl text-lg leading-8 text-muted"
            >
              Helping luxury hospitality, lifestyle and consumer
              brands grow through strategy, storytelling,
              social-first campaigns and impactful digital
              experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.45,
                duration: ANIMATION.durationSlow,
                ease: ANIMATION.easeDefault,
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/work">View Work</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link href="/portfolio.pdf">
                  Download Portfolio
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.65,
                duration: ANIMATION.durationBase,
              }}
              className="mt-14"
            >
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-muted">
                Trusted By
              </p>

              <div className="flex flex-wrap gap-3">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: ANIMATION.easeDefault,
            }}
            className="relative"
          >
            <HeroCollage />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
