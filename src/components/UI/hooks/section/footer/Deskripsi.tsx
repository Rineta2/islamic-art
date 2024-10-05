import React, { Fragment } from "react";

import { dataFooter } from "@/components/UI/data/dataFooter";

export default function Deskripsi() {
  return (
    <Fragment>
      {dataFooter.map((item) => {
        return <p key={item.id}>{item.desc}</p>;
      })}
    </Fragment>
  );
}
