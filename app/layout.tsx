import type { Metadata } from "next";
import { Manrope, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

/* ─── Fonts — self-hosted via next/font (no runtime Google requests) ──────────
   Libre Caslon Text: Elegant editorial serif for a vintage cinematic look
   Manrope:           Clean, modern geometric sans-serif for high readability
──────────────────────────────────────────────────────────────────────────────── */
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const caslon = Libre_Caslon_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caslon",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

/* ─── SEO Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Sewa Photo Booth Premium Jabodetabek - Jakarta, Bogor, Depok, Tangerang, Bekasi | Photoflix",
  description:
    "Vendor sewa photo booth premium instan di Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi). Cetak foto unlimited, custom overlay frame, & properti lengkap untuk Wedding, Birthday, Corporate Event.",
  keywords: [
    "photo booth jakarta",
    "sewa photo booth jakarta",
    "photo booth bogor",
    "photo booth depok",
    "photo booth tangerang",
    "photo booth bekasi",
    "photo booth jabodetabek",
    "sewa photobooth wedding",
    "photo booth birthday",
    "photobooth corporate event",
    "cetak foto instan",
    "Photoflix",
  ],
  openGraph: {
    title: "Photoflix — Sewa Photo Booth Premium Jabodetabek",
    description:
      "Layanan Sewa Photo Booth Premium Unlimited Cetak di Jakarta, Bogor, Depok, Tangerang, Bekasi untuk Wedding & Event.",
    url: "https://photoflix.id",
    siteName: "Photoflix",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Photoflix Photobooth",
    "image": "https://photoflix.id/brandicon.webp",
    "@id": "https://photoflix.id/#localbusiness",
    "url": "https://photoflix.id",
    "telephone": "+6283185558208",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jabodetabek",
      "addressLocality": "Jakarta",
      "addressRegion": "DKI Jakarta",
      "postalCode": "10110",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-6.2088",
      "longitude": "106.8456"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://instagram.com/photoflix.photobooth",
      "https://tiktok.com/@photoflix.photobooth"
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Jakarta" },
      { "@type": "AdministrativeArea", "name": "Bogor" },
      { "@type": "AdministrativeArea", "name": "Depok" },
      { "@type": "AdministrativeArea", "name": "Tangerang" },
      { "@type": "AdministrativeArea", "name": "Bekasi" },
      { "@type": "AdministrativeArea", "name": "Jabodetabek" }
    ]
  };

  return (
    <html lang="id" className={`${manrope.variable} ${caslon.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="antialiased bg-[#041426] text-[#d4e3fd]">{children}</body>
    </html>
  );
}
