"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FetchBlog } from "@/api/blog/FetchBlog";
import { blogProps } from "@/utils/types";
import { baseUrl } from "@/utils/config";
import Link from "next/link";
import { formatDistanceToNowInIndonesian } from "@/utils/formatDistance";
import { truncateText } from "@/utils/truncateText";
import { Fade } from "react-awesome-reveal";

export default function Blog() {
  const [blogs, setBlogs] = useState<blogProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchBlog();
        setBlogs(data);
      } catch (error) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const filterData = blogs.sort(
    (a, b) =>
      new Date(b.attributes.createdAt).getTime() - new Date(a.attributes.createdAt).getTime()
  );

  return (
    <section className="blog">
      <div className="blog__container container">
        <Fade delay={300} duration={1000} direction="down" triggerOnce>
          <div className="heading">
            <h1>Blog Terbaru Kami</h1>
          </div>
        </Fade>

        <Swiper
          grabCursor={true}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          freeMode={true}
          speed={2000}
          keyboard={{ enabled: true }}
          navigation={true}
          modules={[Keyboard, Navigation, Autoplay]}
          className="swiper"
          breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 1, spaceBetween: 20 },
            1280: { slidesPerView: 2, spaceBetween: 30 },
          }}
        >
          {filterData.map((item, index) => (
            <SwiperSlide className="box" key={item.id}>
              <Fade direction="down" delay={index * 300} duration={1000} triggerOnce>
                <Image
                  src={baseUrl + item.attributes.thumbnail.data.attributes.url}
                  alt={item.attributes.title}
                  width={item.attributes.thumbnail.data.attributes.width}
                  height={item.attributes.thumbnail.data.attributes.height}
                  quality={100}
                />
              </Fade>

              <div className="author">
                <span>{item.attributes.author}</span>
                <div className="date">
                  {formatDistanceToNowInIndonesian(new Date(item.attributes.createdAt))}
                </div>
              </div>

              <div className="category">{item.attributes.category}</div>

              <h1>{item.attributes.title}</h1>

              <p>{truncateText(item.attributes.desc, 30)}</p>

              <div className="btn">
                <Link href={`/blog/${item.attributes.slug}`}>
                  Lihat Selengkapnya
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}