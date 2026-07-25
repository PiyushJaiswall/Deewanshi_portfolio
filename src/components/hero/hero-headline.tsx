"use client";

import { motion } from "framer-motion";
import { ANIMATION } from "@/lib/constants";

interface HeroHeadlineProps {
  title: string;
  highlight?: string;
}

export function HeroHeadline({ title, highlight }: HeroHeadlineProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION.durationSlow, ease: ANIMATION.easeDefault }}
      className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
    >
      {title}{" "}
      {highlight && (
        <span className="text-primary">{highlight}</span>
      )}
    </motion.h1>
  );
}
