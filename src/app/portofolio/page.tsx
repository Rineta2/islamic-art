"use client"
import React, { useState, useEffect } from 'react'

import { FetchPortofolio } from "@/api/portofolio/FetchPortofolio"

import { baseUrl } from '@/utils/config'

import { portofolioProps } from "@/utils/types"

import Image from 'next/image'

import "@/components/sass/page.scss"

import { Zoom, Fade } from "react-awesome-reveal"

export default function Portofolio() {
    const [item, setItem] = useState<portofolioProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await FetchPortofolio();
            setItem(data);
        };
        fetchData();
    }, []);

    return (
        <section className='portofolio'>
            <div className="portofolio__container container">
                {
                    item.map((item) => {
                        return (
                            <div className="box" key={item.id}>
                                <div className="text">
                                    <Fade direction='down' duration={3000} delay={300} triggerOnce>
                                        <p>{item.attributes.hastag}</p>
                                    </Fade>

                                    <Fade direction='up' duration={3000} delay={300} triggerOnce>
                                        <h1>{item.attributes.title}</h1>
                                    </Fade>
                                </div>

                                <div className="img">
                                    {Array.isArray(item.attributes.thumbnail.data) && item.attributes.thumbnail.data.length > 0 && (
                                        item.attributes.thumbnail.data.map((img) => (
                                            <Zoom triggerOnce delay={300} duration={3000} key={item.id}>
                                                <Image
                                                    key={img.id}
                                                    src={baseUrl + img.attributes.url}
                                                    alt={img.attributes.name || 'image'}
                                                    width={500}
                                                    height={500}
                                                />
                                            </Zoom>
                                        ))
                                    )}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
