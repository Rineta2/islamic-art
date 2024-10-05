"use client"

import React, { Fragment } from "react";

import { aboutData } from "@/components/UI/data/data";

import Image from "next/image";

import { Zoom } from "react-awesome-reveal"

export default function AbouImg() {
  return (
    <Fragment>
      {aboutData.map((item) => {
        return (
          <Zoom duration={3000} delay={300} triggerOnce>
            <div className="img" key={item.id}>
              <Image
                src={item.img}
                alt={"About Image"}
                quality={100}
                loading="lazy"
              />
            </div>
          </Zoom>
        );
      })}
    </Fragment>
  );
}
