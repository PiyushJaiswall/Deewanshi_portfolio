import { Container } from "@/components/sections/container";
import { FooterLinks } from "@/components/footer/footer-links";
import { getSocials } from "@/lib/data-fetchers";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const socials = getSocials();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {SITE_CONFIG.name}. All rights reserved.
        </p>
        <FooterLinks socials={socials} />
      </Container>
    </footer>
  );
}
