import React, { Fragment } from "react";

import dynamic from "next/dynamic";

import "@/components/sass/page.scss";

const Heading = dynamic(
  () => import("@/components/UI/hooks/pages/kontak-kami/Heading"),
  {
    ssr: false,
  }
);

const Content = dynamic(
  () => import("@/components/UI/hooks/pages/kontak-kami/Content"),
  {
    ssr: false,
  }
);

const Maps = dynamic(
  () => import("@/components/UI/hooks/pages/kontak-kami/Maps"),
  {
    ssr: false,
  }
);

export default function KontakKami() {
  return (
    <Fragment>
      <section className="kontak">
        <div className="kontak__container container">
          <Heading />

          <div className="content">
            <Content />
          </div>
        </div>
      </section>

      <div className="maps">
        <Maps />
      </div>
    </Fragment>
  );
}