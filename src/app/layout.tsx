import { Fragment } from "react";

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

import Head from "@/components/UI/hooks/meta/Head";

import GoogleTag from "@/components/UI/hooks/meta/GoogleTag";

const Header = dynamic(() => import("@/components/UI/layout/Header"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/UI/layout/Footer"), {
  ssr: false,
});

import PopUp from "@/components/UI/hooks/form/PopUp";

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
            <PopUp />
            {children}
            <Footer />
          </main>
        </Fragment>
        <GoogleTag />
      </body>
    </html>
  );
}