import React, { Fragment } from "react";

import { legal } from "@/components/UI/data/dataFooter";

import Link from "next/link";

export default function Legal() {
  return (
    <Fragment>
      {legal.map((item) => {
        return (
          <li key={item.id}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        );
      })}
    </Fragment>
  );
}
