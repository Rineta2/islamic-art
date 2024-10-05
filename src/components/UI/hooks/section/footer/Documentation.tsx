import React, { Fragment } from "react";

import { documentation } from "@/components/UI/data/dataFooter";

import Link from "next/link";

export default function Documentation() {
  return (
    <Fragment>
      {documentation.map((item) => {
        return (
          <li key={item.id}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        );
      })}
    </Fragment>
  );
}
