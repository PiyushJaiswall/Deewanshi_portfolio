"use client";

import { motion } from "framer-motion";
import { HeroHeadline } from "@/components/hero/hero-headline";
import { Container } from "@/components/sections/container";
import { Button } from "@/components/ui/button";
import { ANIMATION } from "@/lib/constants";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center py-20">
      <Container>
        <HeroHeadline
          title="Content that speaks, scrolls, and"
          highlight="sells."
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION.durationSlow,
            delay: 0.2,
            ease: ANIMATION.easeDefault,
          }}
          className="mt-6 max-w-xl text-lg text-muted"
        >
          Social Media Marketer and Content Strategist turning ideas into
          impactful campaigns for brands across hospitality, beauty, and
          mobility.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION.durationSlow,
            delay: 0.4,
            ease: ANIMATION.easeDefault,
          }}
          className="mt-8 flex gap-4"
        >
          <Button size="lg" asChild>
            <Link href="/work">View Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
