import { Fragment } from "react";

export const metadata = {
    title: "Islamic Art",
    description: "Arsitektur Islam,Desain arsitektur Islam,Arsitektur masjid,Gaya arsitektur Islam,Arsitek Muslim,Inspirasi arsitektur Islam,Proyek arsitektur Islam,Sejarah arsitektur Islam,Struktur bangunan Islam,Estetika arsitektur Islam,Kaligrafi Islam,Seni kaligrafi Arab,Teknik kaligrafi Islam,Kaligrafi sebagai seni,Al-Qur'an dan kaligrafi,Alat kaligrafi,Karya kaligrafi terkenal,Kaligrafi modern,Makna kaligrafi Islam,Pelajaran kaligrafi",
    author: "rineta",
    keywords: "Arsitektur Islam,Desain arsitektur Islam,Arsitektur masjid,Gaya arsitektur Islam,Arsitek Muslim,Inspirasi arsitektur Islam,Proyek arsitektur Islam,Sejarah arsitektur Islam,Struktur bangunan Islam,Estetika arsitektur Islam,Kaligrafi Islam,Seni kaligrafi Arab,Teknik kaligrafi Islam,Kaligrafi sebagai seni,Al-Qur'an dan kaligrafi,Alat kaligrafi,Karya kaligrafi terkenal,Kaligrafi modern,Makna kaligrafi Islam,Pelajaran kaligrafi",
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
    twitter: {
        card: "summary_large_image",
        title: "Islamic Art",
        description: "Arsitektur Islam,Desain arsitektur Islam,Arsitektur masjid,Gaya arsitektur Islam,Arsitek Muslim,Inspirasi arsitektur Islam,Proyek arsitektur Islam,Sejarah arsitektur Islam,Struktur bangunan Islam,Estetika arsitektur Islam,Kaligrafi Islam,Seni kaligrafi Arab,Teknik kaligrafi Islam,Kaligrafi sebagai seni,Al-Qur'an dan kaligrafi,Alat kaligrafi,Karya kaligrafi terkenal,Kaligrafi modern,Makna kaligrafi Islam,Pelajaran kaligrafi",
        creator: "@rineta",
        images: "https://islamic-art.vercel.app/favicon.icon",
    },
    verification: process.env.NEXT_PUBLIC_SITE_VERTIFICATION,
};

const siteUrl = "https://islamic-art";
const faviconUrl = `${siteUrl}/favicon.ico`;
const canonicalUrl = `${siteUrl}/`;

const Head = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "VisualArtwork",
        name: "Islamic Art",
        image: "https://islamic-art.vercel.app/favicon.ico",
        "@id": "https://islamic-art",
        url: "https://islamic-art",
        telephone: "081398632939",
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
            <meta name="og:locale" content="id_ID" />
            <meta name="og:site_name" content="Islamic Art" />
            <meta name="og:type" content="website" />
            <link rel="icon" href={faviconUrl} type="image/x-icon" sizes="any" />
            <link rel="icon" href={faviconUrl} type="image/svg+xml" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href={faviconUrl} />
            <link rel="shortcut icon" href={faviconUrl} type="image/x-icon" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="canonical" href={canonicalUrl} />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLdString }}
            />

        </Fragment>
    );
};

export default Head;