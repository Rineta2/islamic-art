import React from "react";

import { useCase } from "@/components/UI/data/dataFooter";

import Image from "next/image";

import "@/components/sass/footer.scss";

import image2 from "@/components/assets/documentation/img4.jpg"

export default function UseCase() {
  return (
    <section className="use-case">
      <div className="use-case__container container">
        <div className="img">
          <Image src={image2} alt="image" quality={100} />
        </div>

        {useCase.map((item) => {
          return (
            <div className="content" key={item.id}>
              <h1>{item.title}</h1>
              {
                item.desc.map((item) => {
                  return (
                    <p key={item.id}>
                      {item.desc}
                    </p>
                  )
                })
              }
            </div>
          );
        })}
      </div>
    </section>
  )
}
