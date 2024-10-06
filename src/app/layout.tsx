import { Fragment } from "react";

import type { Metadata } from 'next';

import Script from "next/script";

export const metadata: Metadata = {
  title: 'Islamic Art',
  description: "Arsitektur Islam,Desain arsitektur Islam,Arsitektur masjid,Gaya arsitektur Islam,Arsitek Muslim,Inspirasi arsitektur Islam,Proyek arsitektur Islam,Sejarah arsitektur Islam,Struktur bangunan Islam,Estetika arsitektur Islam,Kaligrafi Islam,Seni kaligrafi Arab,Teknik kaligrafi Islam,Kaligrafi sebagai seni,Al-Qur'an dan kaligrafi,Alat kaligrafi,Karya kaligrafi terkenal,Kaligrafi modern,Makna kaligrafi Islam,Pelajaran kaligrafi",
  authors: [{ name: "rineta" }],
  generator: "next",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  referrer: "origin-when-cross-origin",
  keywords: "Islamic Art,Islamic Architecture,Islamic Calligraphy,Muslim Artists,Arsitektur Islam,Desain arsitektur Islam,Arsitektur masjid,Gaya arsitektur Islam,Arsitek Muslim,Inspirasi arsitektur Islam,Proyek arsitektur Islam,Sejarah arsitektur Islam,Struktur bangunan Islam,Estetika arsitektur Islam,Kaligrafi Islam,Seni kaligrafi Arab,Teknik kaligrafi Islam,Kaligrafi sebagai seni,Al-Qur'an dan kaligrafi,Alat kaligrafi,Karya kaligrafi terkenal,Kaligrafi modern,Makna kaligrafi Islam,Pelajaran kaligrafi",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Islamic Art",
    description: "Arsitektur Islam,Desain arsitektur Islam,Arsitektur masjid,Gaya arsitektur Islam,Arsitek Muslim,Inspirasi arsitektur Islam,Proyek arsitektur Islam,Sejarah arsitektur Islam,Struktur bangunan Islam,Estetika arsitektur Islam,Kaligrafi Islam,Seni kaligrafi Arab,Teknik kaligrafi Islam,Kaligrafi sebagai seni,Al-Qur'an dan kaligrafi,Alat kaligrafi,Karya kaligrafi terkenal,Kaligrafi modern,Makna kaligrafi Islam,Pelajaran kaligrafi",
    url: "https://islamic-art.vercel.app",
    siteName: "Islamic Art",
    locale: "id_ID",
    images: [
      {
        url: "https://islamic-art.vercel.app/favicon.ico",
        width: 1920,
        height: 1080,
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

import "@/components/sass/layout.scss";
import "@/components/sass/globals.scss";

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

import dynamic from "next/dynamic";

import "animate.css";

const Header = dynamic(() => import("@/components/UI/layout/Header"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/UI/layout/Footer"), {
  ssr: false,
});

import PopUp from "@/components/UI/hooks/form/PopUp";

const siteUrl = "https://islamic-art.vercel.app"
const faviconUrl = `${siteUrl}/favicon.ico`;
const canonicalUrl = `${siteUrl}/`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: "Islamic Art",
    image: "https://islamic-art.vercel.app/favicon.ico",
    "@id": "https://islamic-art",
    url: "https://islamic-art.vercel.app",
    telephone: "081398632939",
    "potentialAction": {
      "@type": "SearchAction",
      target: "https://islamic-art.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jl. Assalam 1 No.1-25, Sanggrahan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta",
      addressLocality: "Jl. Assalam 1 No.1-25, Sanggrahan, Condongcatur, Kec. Depok, Kabupaten Sleman",
      addressRegion: "Jawa Tengah",
      postalCode: "55281",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.595038,
      longitude: 106.670528,
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
      opens: "09:00",
      closes: "21:00",
    },
    sameAs: ["https://www.facebook.com/", "https://www.instagram.com/"],
    description: "Arsitektur Islam,Desain arsitektur Islam,Arsitektur masjid,Gaya arsitektur Islam,Arsitek Muslim,Inspirasi arsitektur Islam,Proyek arsitektur Islam,Sejarah arsitektur Islam,Struktur bangunan Islam,Estetika arsitektur Islam,Kaligrafi Islam,Seni kaligrafi Arab,Teknik kaligrafi Islam,Kaligrafi sebagai seni,Al-Qur'an dan kaligrafi,Alat kaligrafi,Karya kaligrafi terkenal,Kaligrafi modern,Makna kaligrafi Islam,Pelajaran kaligrafi",
    logo: "https://islamic-art.vercel.app/favicon.ico",
    title: "Islamic Art",
  };

  const jsonLdString = JSON.stringify(jsonLd);

  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title ?? "Islamic Art")}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="version" content="1.0" />
        <meta name="description" content={metadata.description ?? ""} />
        <meta name="keywords" content={Array.isArray(metadata.keywords) ? metadata.keywords.join(", ") : metadata.keywords ?? ""} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={String(metadata.openGraph?.title ?? "")} />
        <meta property="og:description" content={String(metadata.openGraph?.description ?? "")} />
        <meta property="og:url" content={metadata.openGraph?.url?.toString() ?? ""} />
        <meta name="referrer" content={metadata.referrer ?? ""} />
        <meta name="googlebot" content="index, follow" />
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_SITE_VERTIFICATION} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href={faviconUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href={faviconUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString }} />
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NSQXTQGF');
        `,
          }}
        />
      </head>
      <body className={roboto.className}>
        <Header />
        <PopUp />
        <Fragment>{children}</Fragment>
        <Footer />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NSQXTQGF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
