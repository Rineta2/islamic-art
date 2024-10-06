import React, { Fragment } from "react";

import { socialLink } from "@/components/UI/data/data";

import Link from "next/link";

export default function Social() {
  return (
    <Fragment>
      {socialLink.map((item) => {
        return (
          <Link href={item.path} key={item.id} rel="noreferrer">
            {item.icons}
          </Link>
        );
      })}
    </Fragment>
  );
}