"use client"
import React, { Fragment } from 'react'

import { catalog_4 } from "@/components/UI/data/data";

import Image from 'next/image';

import { Fade, Zoom } from "react-awesome-reveal"

export default function Catalog_4() {
    return (
        <Fragment>
            <Fragment>
                {
                    catalog_4.map((item) => {
                        return (
                            <div className="pilar" key={item.id}>
                                <div className="text">
                                    <Fade direction='down' delay={300} duration={3000} triggerOnce>
                                        <span className="hastag">{item.hastag}</span>
                                    </Fade>

                                    <Fade direction='up' delay={300} duration={3000} triggerOnce>
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

                                                <div className="img">
                                                    {
                                                        item.images.map((item) => {
                                                            return (
                                                                <Zoom triggerOnce delay={item.id * 300} duration={3000}>
                                                                    <div className="images" key={item.id}>
                                                                        <Image src={item.img} alt="images" quality={100} />
                                                                    </div>
                                                                </Zoom>
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
        </Fragment>
    )
}
