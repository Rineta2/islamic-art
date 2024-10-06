"use client";

import React, { useState, useEffect } from "react";

import { useParams } from "next/navigation";

import { FetchBlog } from "@/api/blog/FetchBlog";

import { blogProps } from "@/utils/types";

import { baseUrl } from "@/utils/config";

import Image from "next/image";

import { socialLink } from "@/components/UI/data/data";

import Link from "next/link";

import "@/components/sass/page.scss";

import { Fade, Zoom } from "react-awesome-reveal"
export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<blogProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchBlog();
      const currentBlog = data.find(
        (item: blogProps) => item.attributes.slug === slug
      );
      setBlog(currentBlog || null);
    };
    fetchData();
  });

  return (
    <section className="blog__details">
      <div className="blogDetails__container container">
        <div className="heading">
          <Fade triggerOnce duration={3000} direction="down" delay={300}>
            <h1>{blog?.attributes.title}</h1>
          </Fade>
        </div>

        <div className="content">
          <div className="center">
            <div className="author">
              {blog?.attributes.avatar?.data?.attributes?.url && (
                <Fade direction="left" delay={300} duration={3000} triggerOnce>
                  <Image
                    src={baseUrl + blog?.attributes.avatar?.data?.attributes?.url}
                    alt="avatar"
                    width={150}
                    height={150}
                    objectFit="cover"
                    style={{ borderRadius: "50%" }}
                  />
                </Fade>
              )}

              <div className="info">
                <Fade triggerOnce delay={300} duration={3000} direction="down">
                  <h3>{blog?.attributes.author}</h3>
                </Fade>

                <Fade triggerOnce delay={300} duration={3000} direction="up">
                  <div className="date">{blog?.attributes.tanggal}</div>
                </Fade>
              </div>
            </div>

            <div className="social__link">
              {socialLink.map((item: any) => {
                return (
                  <Zoom triggerOnce delay={item.id * 300} duration={3000} key={item.id}>
                    <Link key={item.id} href={item.path} rel="noreferrer">
                      {item.icons}
                    </Link>
                  </Zoom>
                );
              })}
            </div>
          </div>

          <div className="components">
            {blog?.attributes?.content.map((block, index) => {
              switch (block.type) {
                case "image":
                  return (
                    <Fade duration={3000} delay={300} triggerOnce key={index}>
                      <Image
                        src={block.image.url}
                        alt={block.image.name}
                        width={block.image.width || 500}
                        height={block.image.height || 500}
                        quality={100}
                        key={index}
                      />
                    </Fade>
                  );

                case "paragraph":
                  return (
                    <Fade triggerOnce delay={300} duration={3000} key={index}>
                      <p key={index}>
                        {block.children
                          ?.map((child: { text: string }) => child.text)
                          .join("")}
                      </p>
                    </Fade>
                  );

                case "heading":
                  return (
                    <Fade triggerOnce delay={300} duration={3000} direction="down" key={index}>
                      <h1 key={index}>
                        {block.children.map((child: any) => child.text)}
                      </h1>
                    </Fade>
                  );

                case "list":
                  return (
                    <ul key={index}>
                      {block.children.map((item: any, i: number) => (
                        <Fade triggerOnce delay={item.id * 300} duration={3000} direction="up" key={i}>
                          <li key={i}>
                            {item.children.map(
                              (child: any) => child.text
                            )}
                          </li>
                        </Fade>
                      ))}
                    </ul>
                  );

                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
