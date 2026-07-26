"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/sections/container";
import { Button } from "@/components/ui/button";
import { HeroCollage } from "@/components/hero/hero-collage";
import { BrandPills } from "@/components/brands/brand-pills";
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
      {/* Background Glow */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <Container className="relative">
        <div className="grid min-h-screen items-center gap-16 py-24 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION.durationFast,
                ease: ANIMATION.easeDefault,
              }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary"
            >
              Creative Marketing Strategist
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: ANIMATION.durationSlow,
                ease: ANIMATION.easeDefault,
              }}
              className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl"
            >
              Building Brands
              <br />
              <span className="text-primary">
                People Can&apos;t
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
              Helping luxury hospitality, lifestyle and consumer brands grow
              through strategy, storytelling, social media, influencer
              campaigns and high-performing digital marketing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.45,
                duration: ANIMATION.durationBase,
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/work">View Work</Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio.pdf">Download Portfolio</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-12 flex flex-wrap gap-10"
            >
              <div>
                <h2 className="text-3xl font-bold">20+</h2>
                <p className="text-sm text-muted">Campaigns</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">6+</h2>
                <p className="text-sm text-muted">Brands</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">100M+</h2>
                <p className="text-sm text-muted">Impressions*</p>
              </div>
            </motion.div>

            <BrandPills brands={brands} />
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: ANIMATION.easeDefault,
            }}
            className="relative hidden items-center justify-center lg:flex"
          >
            <HeroCollage />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
