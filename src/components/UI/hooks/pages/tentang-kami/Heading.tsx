"use client"

import React, { Fragment } from "react";

import { aboutData } from "@/components/UI/data/data";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Fade } from "react-awesome-reveal"

export default function Heading() {
  return (
    <Fragment>
      {aboutData.map((item) => {
        return (
          <div className="title" key={item.id}>
            <Fade delay={300} duration={3000} triggerOnce direction="left">
              <h1>{item.title}</h1>
            </Fade>
          </div>
        );
      })}

      {aboutData.map((item) => {
        return (
          <div className="text" key={item.id}>
            <Fade direction="right" delay={300} duration={3000} triggerOnce>
              <p>{item.text}</p>
            </Fade>

            <Fade direction="up" delay={300} duration={3000} triggerOnce>
              <div className="btn">
                <Link href={item.path}>
                  {item.name} <ArrowUpRight size={30} className="arrow" />
                </Link>
              </div>
            </Fade>
          </div>
        );
      })}
    </Fragment>
  );
}
