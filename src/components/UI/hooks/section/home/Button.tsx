"use client"

import React, { Fragment } from "react";

import { Fade } from "react-awesome-reveal"

import { btnHome } from "@/components/UI/data/data";

import Link from "next/link";

export default function Button() {
  return (
    <Fragment>
      {btnHome.map((item: any) => {
        return (
          <Fade direction="up" duration={3000} delay={item.id * 300} triggerOnce>
            <Link className="btn" key={item.id} href={item.path}>
              <i>{item.icon}</i> {item.name}
            </Link>
          </Fade>
        );
      })}
    </Fragment>
  );
}
