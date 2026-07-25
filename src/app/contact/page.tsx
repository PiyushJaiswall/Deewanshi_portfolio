import type { Metadata } from "next";
import { Container } from "@/components/sections/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { ContactForm } from "@/components/contact/contact-form";
import { SocialIcons } from "@/components/ui/social-icons";
import { getSocials } from "@/lib/data-fetchers";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch for content strategy, social media marketing, and collaboration opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  const socials = getSocials();

  return (
    <section className="py-20">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Work Together"
            subtitle="Have a brand, campaign, or collaboration in mind? Send a message and let's create content that speaks, scrolls, and sells."
          />
          <SocialIcons socials={socials} className="mt-8" />
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
