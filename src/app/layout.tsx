import { Fragment } from "react";

import "@/components/sass/layout.scss";

import "@/components/sass/globals.scss";

import { Roboto } from '@next/font/google';

import Script from "next/script";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

import dynamic from "next/dynamic";

import 'animate.css';

import Head from "@/components/UI/hooks/meta/Head";

const Header = dynamic(() => import("@/components/UI/layout/Header"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/UI/layout/Footer"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body className={roboto.className}>
        <Fragment>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </Fragment>

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
