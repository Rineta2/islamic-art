"use client";

import React, { Fragment, useRef } from "react";

import { arsitekImg } from "@/components/UI/data/data";

import Image from "next/image";

import useHoverAnimation from "@/components/UI/hooks/animation/useHoverAnimation";

export default function Arsitek() {
  const imageRefs = useRef<HTMLDivElement[]>([]);

  useHoverAnimation(imageRefs);
  return (
    <Fragment>
      <div className="img">
        {arsitekImg.map((item: any) => {
          return (
            <Image
              src={item.img}
              alt={item.alt}
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
      </div>
    </Fragment>
  );
}
