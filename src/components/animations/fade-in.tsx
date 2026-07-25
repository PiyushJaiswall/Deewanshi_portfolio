"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { ANIMATION } from "@/lib/constants";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

export function FadeIn({ children, delay = 0 }: FadeInProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: ANIMATION.durationBase, delay, ease: ANIMATION.easeDefault }}
    >
      {children}
    </motion.div>
  );
}
