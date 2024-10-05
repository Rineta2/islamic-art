"use client";
import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { FetchProyek } from "@/api/proyek/FetchProyek";

import { proyekProps } from "@/utils/types";

import { baseUrl } from "@/utils/config";

import Image from "next/image";

import "@/components/sass/page.scss";

import { Fade, Zoom } from "react-awesome-reveal"

export default function ProyekDetails() {
  const { slug } = useParams();

  const [proyek, setProyek] = useState<proyekProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchProyek();
      const currentProyek = data.find(
        (item: proyekProps) => item.attributes.slug === slug
      );
      setProyek(currentProyek || null);
    };
    fetchData();
  }, [slug]);

  return (
    <section className="proyekDetails">
      <div className="proyekDetails__container container">
        <Fade triggerOnce delay={300} duration={3000} direction="down">
          <div className="heading">
            <h1>{proyek?.attributes.title}</h1>
          </div>
        </Fade>

        <div className="author">
          <div className="img">
            {proyek?.attributes.avatar?.data?.attributes?.url && (
              <Fade direction="left" duration={3000} delay={300} triggerOnce>
                <Image
                  src={baseUrl + proyek?.attributes.avatar?.data?.attributes?.url}
                  alt="avatar"
                  width={proyek?.attributes.avatar?.data?.attributes?.width}
                  height={proyek?.attributes.avatar?.data?.attributes?.height}
                />
              </Fade>
            )}
          </div>

          <div className="text">
            <Fade direction="down" duration={3000} delay={300} triggerOnce>
              <h3>{proyek?.attributes.author}</h3>
            </Fade>

            <Fade direction="up" duration={3000} delay={300} triggerOnce>
              <div className="date">{proyek?.attributes.tanggal}</div>
            </Fade>
          </div>
        </div>

        <div className="content">
          {proyek?.attributes?.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <Fade duration={3000} delay={300} triggerOnce key={index}>
                    <p key={index} className="paragraph">
                      {block.children
                        ?.map((child: { text: string }) => child.text)
                        .join("")}
                    </p>
                  </Fade>
                );

              case "image":
                return (
                  <div className="image" key={index}>
                    <Zoom triggerOnce duration={3000} delay={300}>
                      <Image
                        src={block.image.url}
                        alt={block.image.name}
                        width={block.image.width || 500}
                        height={block.image.height || 500}
                        quality={100}
                      />
                    </Zoom>
                  </div>
                );

              case "heading":
                return (
                  <Fade duration={3000} delay={300} direction="up" triggerOnce>
                    <h1 key={index} className="title">
                      {block.children
                        ?.map((child: { text: string }) => child.text)
                        .join("")}
                    </h1>
                  </Fade>
                );

              case "quote":
                return (
                  <Fade direction="up" duration={3000} delay={300} triggerOnce>
                    <blockquote key={index}>
                      {block.children
                        ?.map((child: { text: string }) => child.text)
                        .join("")}
                    </blockquote>
                  </Fade>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </section>
  );
}
