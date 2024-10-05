"use client"

import React, { Fragment } from "react";

import { Fade, Zoom } from "react-awesome-reveal"

import { homeData } from "@/components/UI/data/data";

import AnimatedText from "@/components/UI/hooks/animation/AnimatedText";

export default function Content() {
  return (
    <Fragment>
      {homeData.map((item: any) => {
        return (
          <div className="text" key={item.id}>
            <Fade direction="down" duration={3000} delay={300} triggerOnce>
              <h2>{item.title}</h2>
            </Fade>

            <AnimatedText text={item.text} />

            <Zoom duration={3000} delay={300} triggerOnce>
              <p>{item.desc}</p>
            </Zoom>
          </div>
        );
      })}
    </Fragment>
  );
}
