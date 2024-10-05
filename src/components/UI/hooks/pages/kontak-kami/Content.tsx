"use client"

import React, { Fragment } from "react";

import { kontakBox } from "@/components/UI/data/data";

import Link from "next/link";

import { Fade, Zoom } from "react-awesome-reveal"

export default function Content() {
  return (
    <Fragment>
      {kontakBox.map((item) => {
        return (
          <div className="box" key={item.id}>
            <Fade triggerOnce delay={300} duration={3000} direction="down">
              <span>{item.span}</span>
            </Fade>

            <Zoom triggerOnce delay={300} duration={3000}>
              <h1>{item.title}</h1>
            </Zoom>

            <Fade triggerOnce delay={300} duration={3000} direction="up">
              <p>{item.desc}</p>
            </Fade>

            <Fade triggerOnce delay={300} duration={3000} direction="up">
              <div className="btn">
                <Link href={item.path}>{item.name}</Link>
              </div>
            </Fade>
          </div>
        );
      })}
    </Fragment>
  );
}
