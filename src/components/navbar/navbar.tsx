"use client";

import Link from "next/link";
import { NavLink } from "@/components/navbar/nav-link";
import { MobileMenu } from "@/components/navbar/mobile-menu";
import { Container } from "@/components/sections/container";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import type { NavigationItem } from "@/types";

interface NavbarProps {
  items: NavigationItem[];
}

export function Navbar({ items }: NavbarProps) {
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 20;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all",
        isScrolled
          ? "border-border bg-background/95 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {SITE_CONFIG.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        <MobileMenu items={items} />
      </Container>
    </header>
  );
}
