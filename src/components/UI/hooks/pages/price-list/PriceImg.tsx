"use client"

import React, { Fragment } from "react";

import Image from "next/image";

import { headPrice } from "@/components/UI/data/data";

import { Zoom } from "react-awesome-reveal"

export default function PriceImg() {
  return (
    <Fragment>
      {headPrice.map((item) => {
        return (
          <Zoom duration={3000} delay={300} triggerOnce>
            <Image
              src={item.img}
              alt={"image-price"}
              key={item.id}
              quality={100}
              loading="lazy"
              width={500}
              height={500}
            />
          </Zoom>
        );
      })}
    </Fragment>
  );
}
