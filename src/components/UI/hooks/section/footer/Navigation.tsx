import React, { Fragment } from "react";

import { navigation } from "@/components/UI/data/dataFooter";

import Link from "next/link";

export default function Navigation() {
  return (
    <Fragment>
      {navigation.map((item) => {
        return (
          <li key={item.id}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        );
      })}
    </Fragment>
  );
}
