import React from "react";

import { quickstart } from "@/components/UI/data/dataFooter";

import Image from "next/image";

import gambar from "@/components/assets/documentation/img2.jpg"

import "@/components/sass/footer.scss"
export default function Quickstart() {
  return (
    <section className="quickstart">
      <div className="quickstart__container container">
        <div className="img">
          <Image src={gambar} alt="Gambar" quality={100} />
        </div>

        {quickstart.map((item) => {
          return (
            <div className="box" key={item.id}>
              <h1>{item.title}</h1>

              <ul>
                {item.list.map((item) => {
                  return <li key={item.id}>{item.desc}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
