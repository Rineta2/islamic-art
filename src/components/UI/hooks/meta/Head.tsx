import React, { Fragment } from 'react';

import Script from 'next/script';

export const metadata = {
    title: "Islamic Art",
    description: "Temukan dunia menawan Seni Islam, di mana pola rumit, warna-warna cerah, dan simbolisme yang mendalam bersatu untuk mencerminkan warisan budaya yang kaya dari peradaban Islam",
    author: "rineta",
    faviconUrl: "/favicon.ico",
    keywords: "Arsitektur Islam,Desain arsitektur Islam,Arsitektur masjid,Gaya arsitektur Islam,Arsitek Muslim,Inspirasi arsitektur Islam,Proyek arsitektur Islam,Sejarah arsitektur Islam,Struktur bangunan Islam,Estetika arsitektur Islam,Kaligrafi Islam,Seni kaligrafi Arab,Teknik kaligrafi Islam,Kaligrafi sebagai seni,Al-Qur'an dan kaligrafi,Alat kaligrafi,Karya kaligrafi terkenal,Kaligrafi modern,Makna kaligrafi Islam,Pelajaran kaligrafi",
    verification: process.env.NEXT_PUBLIC_SITE_VERTIFICATION,
    // verification_bing: process.env.NEXT_PUBLIC_SITE_VERIFICATION_BING
};

const siteUrl = "https://islamic-art.vercel.app";
const faviconUrl = `${siteUrl}/favicon.ico`;
const canonicalUrl = `${siteUrl}`;

export default function Head() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "rineta",
        image: "https://islamic-art.vercel.app/favicon.ico",
        "@id": "",
        url: "https://islamic-art.vercel.app",
        telephone: "081398632939",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Assalam 1 No.1-25, Sanggrahan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta",
            addressLocality: "Sanggrahan, Condongcatur, Kec. Depok, Kabupaten Sleman",
            addressRegion: "Yogyakarta",
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
                "Minggu",
                "Senin",
                "Selasa",
                "Rabu",
                "Kamis",
                "Jumat",
                "Sabtu",
            ],
            opens: "08:00",
            closes: "16:00",
        },
        sameAs: [
            "",
            "",
        ],
        description: "",
        logo: "https://islamic-art.vercel.app/favicon.ico",
    };
    return (
        <Fragment>
            <title>{metadata.title}</title>
            <meta charSet="UTF-8" />
            <meta name="version" content="1.0" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={metadata.description} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:type" content="property & designer" />
            <meta name="google-site-verification" content={metadata.verification} />
            <meta property="og:title" content={metadata.title} />
            <meta name="author" content={metadata.author} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={faviconUrl} />
            <meta name="keywords" content={metadata.keywords} />
            <meta name="googlebot" content="index, follow" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="robots" content="index, follow" />
            <link rel="icon" href={faviconUrl} type="image/x-icon" sizes="any" />
            <link rel="icon" href={faviconUrl} type="image/svg+xml" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href={faviconUrl} />
            <link rel="shortcut icon" href={faviconUrl} type="image/x-icon" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="canonical" href={canonicalUrl} />
            <Script
                type="application/ld+json"
                id="json-ld"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </Fragment>
    );
}