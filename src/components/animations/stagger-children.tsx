"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

interface StaggerChildrenProps {
  children: React.ReactNode;
}

export function StaggerChildren({ children }: StaggerChildrenProps) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children }: { children: React.ReactNode }) {
  return <motion.div variants={item}>{children}</motion.div>;
}
