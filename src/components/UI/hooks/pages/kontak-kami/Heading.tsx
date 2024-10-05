"use client"

import React, { Fragment } from "react";

import { kontakData } from "@/components/UI/data/data";

import { Fade, Zoom } from "react-awesome-reveal"

export default function Heading() {
  return (
    <Fragment>
      {kontakData.map((item) => {
        return (
          <div className="heading" key={item.id}>
            <Fade duration={3000} delay={300} direction="down" triggerOnce>
              <span>{item.name}</span>
            </Fade>

            <Zoom triggerOnce duration={3000} delay={300}>
              <h1>{item.title}</h1>
            </Zoom>

            <Fade duration={3000} delay={300} direction="up" triggerOnce>
              <p>{item.desc}</p>
            </Fade>
          </div>
        );
      })}
    </Fragment>
  );
}
