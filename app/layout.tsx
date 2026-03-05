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
        priceRange: "\u20b9\u20b9",
        address: {
          "@type": "PostalAddress",
          addressLocality: "West Delhi",
          addressRegion: "Delhi",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.663522975546325,
          longitude: 77.06417251108104,
        },
        hasMap: "https://www.google.com/maps?q=Annapurna+Rasoi+Paschim+Vihar+Delhi",
        areaServed: {
          "@type": "Place",
          name: "West Delhi",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://annapurnarasoi.in/#localbusiness",
        name: "Annapurna Rasoi",
        image: "https://annapurnarasoi.in/og-image.jpg",
        servesCuisine: "North Indian",
        priceRange: "\u20b9\u20b9",
        address: {
          "@type": "PostalAddress",
          addressLocality: "West Delhi",
          addressRegion: "Delhi",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.663522975546325,
          longitude: 77.06417251108104,
        },
        hasMap: "https://www.google.com/maps?q=Annapurna+Rasoi+Paschim+Vihar+Delhi",
        areaServed: {
          "@type": "Place",
          name: "West Delhi",
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

