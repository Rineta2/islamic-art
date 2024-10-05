import React from "react";

import { whayUse } from "@/components/UI/data/dataFooter";

import Image from "next/image";

import imageL from "@/components/assets/documentation/img3.jpg";

import "@/components/sass/footer.scss";

export default function WhayUse() {
  return <section className="whayUse">
    <div className="whayuse__container container">
      <div className="img">
        <Image src={imageL} alt="image" quality={100} />
      </div>

      {
        whayUse.map((item) => {
          return (
            <div className="box" key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          )
        })
      }
    </div>
  </section>;
}
