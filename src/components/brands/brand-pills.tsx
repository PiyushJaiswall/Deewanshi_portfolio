"use client";

import { motion } from "framer-motion";

interface BrandPillsProps {
  brands: string[];
}

export function BrandPills({ brands }: BrandPillsProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.6,
        duration: 0.6,
      }}
      className="mt-14"
    >
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-muted">
        Trusted By
      </p>

      <div className="flex flex-wrap gap-3">
        {brands.map((brand, index) => (
          <motion.div
            key={brand}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: index * 0.08 + 0.8,
            }}
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            className="
              rounded-full
              border
              border-border
              bg-card
              px-5
              py-2
              text-sm
              font-medium
              shadow-sm
              transition-all
              duration-300
              hover:border-primary
              hover:bg-primary
              hover:text-primary-foreground
              hover:shadow-lg
            "
          >
            {brand}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
