"use client"

import React from "react";

import Image from "next/image";

import Link from "next/link";

import { baseUrl } from "@/utils/config";

import { ProyekItemProps } from "@/utils/types";

import { truncateText } from "@/utils/truncateText";

import { Fade, Zoom } from "react-awesome-reveal"

const ProyekItem: React.FC<ProyekItemProps> = ({ proyek }) => {
  return (
    <div className="box">
      <div className="img">
        <Fade direction="down" delay={proyek.id * 100} duration={3000} triggerOnce>
          <Image
            src={baseUrl + proyek.attributes.thumbnail.data.attributes.url}
            alt="profile"
            width={proyek.attributes.thumbnail.data.attributes.width}
            height={proyek.attributes.thumbnail.data.attributes.height}
            quality={100}
            loading="lazy"
          />
        </Fade>

        <div className="progres">{proyek.attributes.progres}</div>
      </div>

      <div className="text">
        <div className="center">
          <Fade delay={300} duration={3000} triggerOnce direction="left">
            <div className="category">{proyek.attributes.category}</div>
          </Fade>

          <Fade direction="right" duration={3000} delay={300} triggerOnce>
            <div className="date">{proyek.attributes.tanggal}</div>
          </Fade>
        </div>

        <Fade direction="up" delay={300} duration={3000} triggerOnce>
          <h1>{proyek.attributes.title}</h1>
        </Fade>

        <Zoom duration={3000} delay={300} triggerOnce>
          <p>
            {proyek.attributes.desc && truncateText(proyek.attributes.desc, 20)}
          </p>
        </Zoom>

        <Fade duration={3000} delay={300} triggerOnce direction="up">
          <Link href={`proyek/${proyek.attributes.slug}`}>Lihat Details</Link>
        </Fade>
      </div>
    </div>
  );
};

export default ProyekItem;
