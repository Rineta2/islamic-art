"use client";

import Image from "next/image";

import Link from "next/link";

import { baseUrl } from "@/utils/config";

import { proyekProps } from "@/utils/types";

import { truncateText } from "@/utils/truncateText";

import { formatDistanceToNowInIndonesian } from "@/utils/formatDistance";

import { Fade, Zoom } from "react-awesome-reveal"

interface ProyekFilterProps {
  topItem: proyekProps | null;
}

export default function ProyekFilter({ topItem }: ProyekFilterProps) {
  if (!topItem) return null;

  return (
    <div className="featured" key={topItem.id}>
      <div className="img">
        <Zoom triggerOnce duration={3000} delay={300}>
          <Image
            src={`${baseUrl}${topItem.attributes.thumbnail.data.attributes.url}`}
            alt={`Thumbnail for ${topItem.attributes.title}`}
            width={topItem.attributes.thumbnail.data.attributes.width}
            height={topItem.attributes.thumbnail.data.attributes.height}
            quality={100}
          />
        </Zoom>

        <div className="progres">{topItem.attributes.progres}</div>
      </div>

      <div className="text">
        <div className="center">
          <Fade direction="left" delay={300} duration={3000} triggerOnce>
            <div className="category">{topItem.attributes.category}</div>
          </Fade>

          <Fade direction="right" delay={300} duration={3000} triggerOnce>
            <div className="date">
              {formatDistanceToNowInIndonesian(
                new Date(topItem.attributes.createdAt)
              )}
            </div>
          </Fade>
        </div>

        <Fade direction="down" duration={3000} delay={300} triggerOnce>
          <h1>{topItem.attributes.title}</h1>
        </Fade>

        <Zoom duration={3000} delay={300} triggerOnce>
          <p>
            {topItem.attributes.desc && truncateText(topItem.attributes.desc, 20)}
          </p>
        </Zoom>

        <Fade direction="up" duration={3000} delay={300} triggerOnce>
          <div className="btn">
            <Link href={`/proyek/${topItem.attributes.slug}`}>Lihat Proyek</Link>
          </div>
        </Fade>
      </div>
    </div >
  );
}
