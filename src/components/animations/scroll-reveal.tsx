"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { ANIMATION } from "@/lib/constants";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
}

const offsets = {
  up: { y: 30, x: 0 },
  left: { y: 0, x: -30 },
  right: { y: 0, x: 30 },
};

export function ScrollReveal({ children, direction = "up" }: ScrollRevealProps) {
  const { ref, isInView } = useInView();
  const offset = offsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: ANIMATION.durationSlow, ease: ANIMATION.easeDefault }}
    >
      {children}
    </motion.div>
  );
}
