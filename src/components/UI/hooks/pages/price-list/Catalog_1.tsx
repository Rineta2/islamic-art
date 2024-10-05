"use client"
import React, { Fragment } from 'react'

import Image from 'next/image'

import { catalog_1 } from "@/components/UI/data/data"

import { Fade, Zoom } from "react-awesome-reveal"

export default function Catalog_1() {
    return (
        <Fragment>
            {
                catalog_1.map((item) => {
                    return (
                        <div className="box" key={item.id}>
                            <div className="text">
                                <Fade direction='down' duration={3000} delay={300} triggerOnce>
                                    <span className="hastag">{item.hastag}</span>
                                </Fade>

                                <Fade direction='up' duration={3000} delay={300} triggerOnce>
                                    <h1>{item.title}</h1>
                                </Fade>
                            </div>

                            {
                                item.details.map((item) => {
                                    return (
                                        <div className="components" key={item.id}>
                                            <Zoom duration={3000} delay={300} triggerOnce>
                                                <p>{item.desc}</p>
                                            </Zoom>

                                            <div className="img" >
                                                {
                                                    item.img.map((img) => {
                                                        return (
                                                            <div className="images" key={item.id}>
                                                                <Fade delay={item.id * 300} duration={3000} direction='up' triggerOnce>
                                                                    <Image src={img.img} alt="image" quality={100} loading="lazy" />
                                                                </Fade>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </Fragment>
    )
}
