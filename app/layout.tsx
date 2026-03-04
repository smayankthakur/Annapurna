import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "../styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Annapurna Rasoi | Premium Cloud Kitchen in West Delhi",
  description:
    "Experience Michelin-style North Indian cloud kitchen dining in West Delhi. Fast delivery, premium combos, and authentic flavours of Delhi.",
  openGraph: {
    title: "Annapurna Rasoi | Premium Cloud Kitchen in West Delhi",
    description:
      "Authentic North Indian cloud kitchen experience for West Delhi with premium combos and fast delivery.",
    siteName: "Annapurna Rasoi",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": "https://annapurnarasoi.in/#restaurant",
        name: "Annapurna Rasoi",
        servesCuisine: "North Indian",
        priceRange: "â‚¹â‚¹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "West Delhi",
          addressRegion: "Delhi",
          addressCountry: "IN",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://annapurnarasoi.in/#localbusiness",
        name: "Annapurna Rasoi",
        image: "https://annapurnarasoi.in/og-image.jpg",
        address: {
          "@type": "PostalAddress",
          addressLocality: "West Delhi",
          addressRegion: "Delhi",
          addressCountry: "IN",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.5",
          reviewCount: "300+",
        },
      },
      {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        reviewCount: "300+",
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable} font-body`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}

