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
    "Risk Free Marketing® empowers you to do what you love by getting you clients with zero upfront costs. We invest in you to get you clients and give you AI powered systems to free up your time.",
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K7QV7MWJ');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased bg-black text-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K7QV7MWJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
