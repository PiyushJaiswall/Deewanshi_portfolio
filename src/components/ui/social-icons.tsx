import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types";

interface SocialIconsProps {
  socials: SocialLink[];
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  instagram: Instagram,
  linkedin: Linkedin,
  mail: Mail,
};

export function SocialIcons({ socials, className }: SocialIconsProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      {socials.map((social) => {
        const Icon = iconMap[social.icon] ?? Mail;
        return (
          <Link
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.platform}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <Icon size={18} />
          </Link>
        );
      })}
    </div>
  );
}
