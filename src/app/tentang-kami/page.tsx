import React from "react";

import dynamic from "next/dynamic";

const Heading = dynamic(
  () => import("@/components/UI/hooks/pages/tentang-kami/Heading"),
  {
    ssr: false,
  }
);

const AbouImg = dynamic(
  () => import("@/components/UI/hooks/pages/tentang-kami/AbouImg"),
  {
    ssr: false,
  }
);

import "@/components/sass/page.scss";

export default function TentangKami() {
  return (
    <section className="about">
      <div className="about__container container">
        <div className="heading">
          <Heading />
        </div>

        <AbouImg />
      </div>
    </section>
  );
}