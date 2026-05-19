import type { Metadata, Viewport } from "next";
import "../src/styles.css";

export const metadata: Metadata = {
  title: "360Airo - AI Outreach for LinkedIn, Email & Calls",
  description:
    "The all-in-one AI outreach platform. Automate LinkedIn, cold email, and calling sequences from a single dashboard. Smarter conversations, higher conversions.",
  authors: [{ name: "Lovable" }],
  openGraph: {
    title: "360Airo - AI Outreach for LinkedIn, Email & Calls",
    description:
      "Automate LinkedIn, email, and calls with AI. Higher reply rates, faster pipeline growth.",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@Lovable",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
