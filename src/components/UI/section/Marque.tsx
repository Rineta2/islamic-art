"use client";

import React, { useState, useEffect } from "react";

import { FetchMarque } from "@/api/marque/FetchMarque";

import { merquProps } from "@/utils/types";

import Image from "next/image";

import { baseUrl } from "@/utils/config";

import { headPortofolio } from "@/components/UI/data/data";

import Marquee from "react-fast-marquee";

import "@/components/sass/page.scss";

import { Fade } from "react-awesome-reveal"

export default function Marque() {
  const [marque, setMarque] = useState<merquProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchMarque();
      setMarque(data);
    };
    fetchData();
  }, []);

  return (
    <div className="marque">
      <div className="marque__container container">
        <div className="heading">
          <Fade direction="left" duration={3000} delay={300} triggerOnce>
            {headPortofolio.map((item: any) => {
              return <div className="title" key={item.id}>
                <h1>{item.title}</h1>;
              </div>
            })}
          </Fade>

          <Fade direction="right" duration={3000} delay={300} triggerOnce>
            {headPortofolio.map((item: any) => {
              return <div className="desc" key={item.id}>
                <p>{item.desc}</p>;
              </div>
            })}
          </Fade>
        </div>

        <div className="marque__content">
          <Marquee
            autoFill={true}
            speed={50}
            pauseOnHover={true}
            gradient={false}
            gradientColor="black"
          >
            {marque.map((item: any) => {
              return (
                <Fade delay={item.id * 300} duration={3000} triggerOnce key={item.id}>
                  <div className="img" key={item.id}>
                    <Image
                      src={`${baseUrl}${item.attributes.thumbnail.data.attributes.url}`}
                      alt={item.attributes.thumbnail.data.attributes.url}
                      width={item.attributes.thumbnail.data.attributes.width}
                      height={item.attributes.thumbnail.data.attributes.height}
                    />
                  </div>
                </Fade>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
