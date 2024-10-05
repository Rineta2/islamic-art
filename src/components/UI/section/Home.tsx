import React from "react";

import dynamic from "next/dynamic";

const Content = dynamic(
  () => import("@/components/UI/hooks/section/home/Content"),
  {
    ssr: false,
  }
);

const Button = dynamic(
  () => import("@/components/UI/hooks/section/home/Button"),
  {
    ssr: false,
  }
);

const Arsitek = dynamic(
  () => import("@/components/UI/hooks/section/home/Arsitek"),
  {
    ssr: false,
  }
);

const Kaligrafi = dynamic(
  () => import("@/components/UI/hooks/section/home/Kaligrafi"),
  {
    ssr: false,
  }
);

import { RiArrowDownDoubleLine } from "@remixicon/react";

export default function Home() {
  return (
    <section className="home">
      <div className="home__container container">
        <div className="content">
          <Content />

          <div className="buttons">
            <Button />
          </div>
        </div>

        <div className="left">
          <Arsitek />
        </div>

        <div className="right">
          <Kaligrafi />
        </div>

        <div className="arrow">
          <RiArrowDownDoubleLine size={30} />
        </div>
      </div>
    </section>
  );
}
