import Link from "next/link";
import type { SocialLink } from "@/types";

interface FooterLinksProps {
  socials: SocialLink[];
}

export function FooterLinks({ socials }: FooterLinksProps) {
  return (
    <div className="flex gap-6">
      {socials.map((social) => (
        <Link
          key={social.platform}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted transition-colors hover:text-primary"
        >
          {social.platform}
        </Link>
      ))}
    </div>
  );
}
