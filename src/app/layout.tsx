import type { Metadata } from "next";
import { Stint_Ultra_Expanded, Pontano_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stint = Stint_Ultra_Expanded({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-stint",
});

const pontano = Pontano_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-pontano",
});

export const metadata: Metadata = {
  title: "Yes Crew | Risk Free Marketing® - Get Clients with Zero Upfront Cost",
  description:
    "Risk Free Marketing® empowers people to do what they love by getting them clients with zero upfront costs. We invest in them to get them clients and give them AI powered systems that support their business.",
  metadataBase: new URL("https://yescrew.com"),
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Yes Crew",
  alternateName: "Risk Free Marketing®",
  url: "https://yescrew.com",
  logo: "https://yescrew.com/yes-crew-logo-scaled.png",
  email: "info@yescrew.com",
  telephone: "(424) 999-0653",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/find.your.crew",
    "https://www.instagram.com/joinyescrew",
    "https://www.linkedin.com/company/yes-crew-network/",
    "https://www.youtube.com/@Yescrewnetwork",
    "https://x.com/_freemarketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${stint.variable} ${pontano.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased bg-black text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
