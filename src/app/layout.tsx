import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { getNavigation } from "@/lib/data-fetchers";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation = getNavigation();

  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar items={navigation} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
