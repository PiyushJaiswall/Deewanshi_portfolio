export const SITE_CONFIG = {
  name: "Deewanshi Khandal",
  title: "Deewanshi Khandal | Social Media Marketer & Content Strategist",
  description:
    "Social Media Marketer and Content Strategist crafting content that speaks, scrolls, and sells.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.vercel.app",
  ogImage: "/og-image.jpg",
};

export const BREAKPOINTS = {
  mobile: 0,
  tablet: 640,
  desktop: 1024,
  wide: 1440,
};

export const ANIMATION = {
  durationFast: 0.3,
  durationBase: 0.5,
  durationSlow: 0.8,
  easeDefault: [0.25, 0.1, 0.25, 1],
};
