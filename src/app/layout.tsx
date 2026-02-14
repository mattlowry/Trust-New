import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trustsocal.com"),
  title: {
    default: "Drug & Alcohol Rehab Orange County | Trust SoCal",
    template: "%s | Trust SoCal",
  },
  description:
    "Premier addiction treatment center in Orange County, California. Evidence-based care including medical detox, residential treatment, dual diagnosis, IOP & PHP programs. JCAHO accredited. Call (949) 280-8360.",
  keywords: [
    "drug rehab Orange County",
    "alcohol rehab Orange County",
    "addiction treatment center Orange County",
    "rehab center Southern California",
    "medical detox Orange County",
    "dual diagnosis treatment",
    "residential treatment California",
    "IOP Orange County",
    "PHP program Orange County",
    "Trust SoCal",
  ],
  authors: [{ name: "Trust SoCal" }],
  creator: "Trust SoCal",
  publisher: "Trust SoCal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.trustsocal.com",
    siteName: "Trust SoCal",
    title: "Drug & Alcohol Rehab Orange County | Trust SoCal",
    description:
      "Premier addiction treatment center in Orange County, California. Evidence-based care for lasting recovery. JCAHO accredited. Call (949) 280-8360.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trust SoCal - Addiction Treatment Center in Orange County, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drug & Alcohol Rehab Orange County | Trust SoCal",
    description:
      "Premier addiction treatment center in Orange County, California. Evidence-based care for lasting recovery.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.trustsocal.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "MedicalBusiness"],
    name: "Trust SoCal",
    url: "https://www.trustsocal.com",
    logo: "https://www.trustsocal.com/logo.png",
    description:
      "Premier addiction treatment center in Orange County, California providing evidence-based care for lasting recovery.",
    telephone: "+19492808360",
    email: "info@trustsocal.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "16537 Elm Cir",
      addressLocality: "Fountain Valley",
      addressRegion: "CA",
      postalCode: "92708",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.7175,
      longitude: -117.9533,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Orange County, California" },
      { "@type": "AdministrativeArea", name: "Los Angeles County, California" },
      { "@type": "AdministrativeArea", name: "San Diego County, California" },
      { "@type": "City", name: "Fountain Valley" },
      { "@type": "City", name: "Huntington Beach" },
      { "@type": "City", name: "Costa Mesa" },
      { "@type": "City", name: "Irvine" },
      { "@type": "City", name: "Santa Ana" },
      { "@type": "City", name: "Anaheim" },
      { "@type": "City", name: "Newport Beach" },
      { "@type": "City", name: "Long Beach" },
      { "@type": "City", name: "Los Angeles" },
      { "@type": "City", name: "Pasadena" },
      { "@type": "City", name: "Torrance" },
      { "@type": "City", name: "San Diego" },
      { "@type": "City", name: "Chula Vista" },
      { "@type": "City", name: "Oceanside" },
    ],
    sameAs: [],
    medicalSpecialty: "Psychiatric",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Accreditation",
      recognizedBy: {
        "@type": "Organization",
        name: "The Joint Commission (JCAHO)",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "James R." },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Trust SoCal gave me my life back. The therapists genuinely cared about my recovery, and the structure of the residential program helped me build the habits I needed to stay sober.",
        datePublished: "2025-06-15",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Angela W." },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Trust SoCal treated my addiction and my depression at the same time, which no other program had done before. The dual diagnosis approach finally addressed the root causes of my substance use.",
        datePublished: "2025-08-20",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Samantha T." },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "The IOP program at Trust SoCal allowed me to get the help I needed while still keeping my job. The evening sessions fit my schedule perfectly, and the coping skills I learned have been life-changing.",
        datePublished: "2025-09-10",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-teal-700 focus:shadow-lg focus:ring-2 focus:ring-teal-500"
        >
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
          <Header />
          <main id="main-content" className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
