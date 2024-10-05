import React from "react";

import Image from "next/image";

import { introduction } from "@/components/UI/data/dataFooter";

import "@/components/sass/footer.scss";

export default function Introduction() {
  return (
    <section className="introduction">
      <div className="introduction__container container">
        {introduction.map((img) => {
          return (
            <div className="img" key={img.id}>
              <Image
                src={img.img}
                alt="Introduction"
                quality={100}
                loading="lazy"
              />
            </div>
          );
        })}

        {introduction.map((item) => {
          return (
            <div className="text" key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
