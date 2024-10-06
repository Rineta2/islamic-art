"use client";

import React, { Fragment, useRef } from "react";

import { kaligrafiImg } from "@/components/UI/data/data";

import Image from "next/image";
import useHoverAnimation from "@/components/UI/hooks/animation/useHoverAnimation";

export default function Kaligrafi() {
  const imageRefs = useRef<HTMLDivElement[]>([]);

  useHoverAnimation(imageRefs);
  return (
    <Fragment>
      {kaligrafiImg.map((item: any) => {
        return (
          <Image
            src={item.img}
            alt={"kaligrafi"}
            key={item.id}
            quality={100}
            ref={(el) => {
              if (el) {
                imageRefs.current[item.id] = el;
              }
            }}
          />
        );
      })}
    </Fragment>
  );
}
