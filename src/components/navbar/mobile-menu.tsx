"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/navbar/nav-link";
import { IconButton } from "@/components/buttons/icon-button";
import type { NavigationItem } from "@/types";

interface MobileMenuProps {
  items: NavigationItem[];
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <IconButton
        icon={isOpen ? <X size={22} /> : <Menu size={22} />}
        label="Toggle menu"
        onClick={() => setIsOpen((prev) => !prev)}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-full flex w-full flex-col gap-4 bg-background px-6 py-6 shadow-lg"
          >
            {items.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
