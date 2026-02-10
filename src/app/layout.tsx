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
      { "@type": "City", name: "Fountain Valley" },
      { "@type": "City", name: "Huntington Beach" },
      { "@type": "City", name: "Costa Mesa" },
      { "@type": "City", name: "Irvine" },
      { "@type": "City", name: "Santa Ana" },
      { "@type": "City", name: "Anaheim" },
      { "@type": "City", name: "Newport Beach" },
      { "@type": "AdministrativeArea", name: "Orange County" },
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
  };

  return (
    <html lang="en">
      <head>
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
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
