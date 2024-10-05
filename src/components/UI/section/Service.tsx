"use client";

import React, { useState } from "react";

import { serviceData } from "@/components/UI/data/data";

import Image from "next/image";

import { RiArrowUpSLine } from "@remixicon/react";

import dynamic from "next/dynamic";

import { Fade } from "react-awesome-reveal"

const Heading = dynamic(
  () => import("@/components/UI/hooks/section/services/Heading"),
  {
    ssr: false,
  }
);

export default function Service() {
  const [active, setActive] = useState(1);

  const handleActive = (id: number) => {
    setActive(id);
  };

  const filterData = serviceData.filter((item) => item.id === active);

  return (
    <section className="service">
      <div className="service__container container">
        <div className="content">
          <div className="text">
            <Heading />

            {serviceData.map((item: any) => {
              return (
                <div
                  className={`box ${active === item.id ? "active" : ""}`}
                  key={item.id}
                  onClick={() => handleActive(item.id)}
                >
                  <div className="question">
                    <Fade direction="up" duration={3000} delay={item.id * 300} triggerOnce>
                      <h1>{item.title}</h1>
                    </Fade>
                    <RiArrowUpSLine size={30} className="icon" />
                  </div>

                  <div className="answer">
                    <Fade direction="up" duration={3000} delay={300} triggerOnce>
                      <p>{item.desc}</p>
                    </Fade>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="img">
            {filterData.map((item: any) => {
              return (
                <Image
                  src={item.img}
                  alt={item.title}
                  quality={100}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
