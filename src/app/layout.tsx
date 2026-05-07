import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://lumenforge.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lumenforge Studio | Immersive Digital Experiences",
    template: "%s | Lumenforge Studio",
  },
  description:
    "Lumenforge Studio designs immersive digital experiences, spatial websites, and conversion-focused product interfaces for ambitious brands.",
  applicationName: "Lumenforge Studio",
  keywords: [
    "Immersive Digital Experiences",
    "creative agency",
    "3D websites",
    "interactive web design",
    "React Three Fiber agency",
  ],
  authors: [{ name: "Lumenforge Studio" }],
  creator: "Lumenforge Studio",
  publisher: "Lumenforge Studio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lumenforge Studio | Immersive Digital Experiences",
    description:
      "High-performance creative technology for brands that need interactive web launches, 3D product stories, and measurable growth.",
    url: siteUrl,
    siteName: "Lumenforge Studio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumenforge Studio | Immersive Digital Experiences",
    description:
      "Interactive launch systems, spatial interfaces, and performance-minded creative engineering.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
