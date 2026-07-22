import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yes Crew | Risk Free Marketing® - Get Clients with Zero Upfront Cost",
    template: "%s | Yes Crew",
  },
  description: "Yes Crew helps local businesses grow with Risk Free Marketing®. Get clients with zero upfront costs - you only pay when you get paid. Join our network today.",
  keywords: ["risk free marketing", "performance based marketing", "local business marketing", "get more clients", "pay for results", "yes crew", "barber marketing"],
  openGraph: {
    title: "Yes Crew | Risk Free Marketing® - Get Clients with Zero Upfront Cost",
    description: "Risk Free Marketing® empowers people to do what they love by getting them clients with zero upfront costs. You only pay when you get paid.",
    url: "https://yescrew.com",
    siteName: "Yes Crew",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Yes Crew",
              "description": "Risk Free Marketing® - Get clients with zero upfront costs",
              "telephone": "+1-424-999-0653",
              "email": "info@yescrew.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Los Angeles",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "url": "https://yescrew.com",
              "sameAs": [
                "https://www.youtube.com/channel/UChtXstkO2ci3WRJNgZ7RdfA"
              ]
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
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
