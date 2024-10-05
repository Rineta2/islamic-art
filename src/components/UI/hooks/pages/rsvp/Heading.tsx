import React, { Fragment } from 'react'

import { dataRSVP, socialLink } from "@/components/UI/data/data";

import Link from "next/link"

export default function Heading() {
    return (
        <Fragment>
            {
                dataRSVP.map((item) => {
                    return (
                        <div className="heading" key={item.id}>
                            <h1>{item.name}</h1>

                            <div className="center">
                                {
                                    item.icons.map((item) => {
                                        return (
                                            <span key={item.id}>{item.icons}</span>
                                        )
                                    })
                                }

                                <div className="number">
                                    2,470 Total Reviews
                                </div>
                            </div>

                            <div className="social">
                                {
                                    socialLink.map((item) => {
                                        return (
                                            <Link className="box__icons" key={item.id} href={item.path}>
                                                {item.icons}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}
