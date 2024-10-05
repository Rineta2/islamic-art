"use client"

import React, { Fragment } from 'react'

import { HeadingService } from "@/components/UI/data/data";

import { Fade, Zoom } from "react-awesome-reveal"

export default function Heading() {
    return (
        <Fragment>
            {HeadingService.map((item: any) => {
                return (
                    <div className="heading" key={item.id}>
                        <Fade direction='down' duration={3000} delay={item.id * 300} triggerOnce>
                            <h1>{item.title}</h1>
                        </Fade>

                        <Zoom duration={3000} delay={item.id * 300} triggerOnce>
                            <span>{item.desc}</span>
                        </Zoom>
                    </div>
                );
            })}
        </Fragment>
    )
}
