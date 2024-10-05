"use client"
import React from 'react'

import { bannerData } from "@/components/UI/data/data";

import Image from "next/image"

import Link from 'next/link';

import { Fade } from 'react-awesome-reveal';

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner__container container">
                {
                    bannerData.map((item) => {
                        return (
                            <Fade duration={3000} delay={300} triggerOnce direction='up'>
                                <div className="img" key={item.id}>
                                    <Image src={item.img} quality={100} loading='lazy' alt='banner' />

                                    <div className="btn">
                                        <Link href={"/portofolio"}>Portofolio Kami</Link>
                                    </div>
                                </div>
                            </Fade>
                        )
                    })
                }
            </div>
        </div>
    )
}
