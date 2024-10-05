import React from "react";

import dynamic from "next/dynamic";

import "@/components/sass/page.scss";

const PriceImg = dynamic(
  () => import("@/components/UI/hooks/pages/price-list/PriceImg"),
  {
    ssr: false,
  }
);

const Catalog_1 = dynamic(
  () => import("@/components/UI/hooks/pages/price-list/Catalog_1"),
  {
    ssr: false,
  }
);

const Catalog_2 = dynamic(
  () => import("@/components/UI/hooks/pages/price-list/Catalog_2"),
  {
    ssr: false,
  }
);

const Catalog_3 = dynamic(
  () => import("@/components/UI/hooks/pages/price-list/Catalog_3"),
  {
    ssr: false,
  }
);

const Catalog_4 = dynamic(
  () => import("@/components/UI/hooks/pages/price-list/Catalog_4"),
  {
    ssr: false,
  }
);

export default function PriceList() {
  return (
    <section className="price">
      <div className="price__container container">
        <div className="heading">
          <PriceImg />
        </div>

        <Catalog_1 />

        <Catalog_2 />

        <Catalog_3 />

        <Catalog_4 />
      </div>
    </section>
  );
}
