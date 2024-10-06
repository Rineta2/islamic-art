import React, { Fragment } from "react";

import Image from "next/image";

import { dataFooter } from "@/components/UI/data/dataFooter";

export default function Profile() {
  return (
    <Fragment>
      {dataFooter.map((item) => {
        return (
          <Image src={item.img} key={item.id} alt={"footer"} quality={100} />
        );
      })}
    </Fragment>
  );
}