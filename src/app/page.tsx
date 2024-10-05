import React, { Fragment } from "react";

import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/components/UI/section/Home"), {
  ssr: false,
});

const Service = dynamic(() => import("@/components/UI/section/Service"), {
  ssr: false,
});

const Marque = dynamic(() => import("@/components/UI/section/Marque"), {
  ssr: false,
});

const Proyek = dynamic(() => import("@/app/proyek/page"), {
  ssr: false,
});

const Blog = dynamic(() => import("@/app/blog/page"), {
  ssr: false,
});

const Banner = dynamic(() => import("@/components/UI/section/Banner"), {
  ssr: false,
});

import "@/components/sass/page.scss";

export default function page() {
  return (
    <Fragment>
      <Home />
      <Service />
      <Marque />
      <Banner />
      <Proyek />
      <Blog />
    </Fragment>
  );
}
