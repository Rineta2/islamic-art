"use client"

import React, { Fragment } from "react";

import { Fade } from "react-awesome-reveal"

export default function Maps() {
  return (
    <Fragment>
      <Fade direction="up" delay={300} duration={3000} triggerOnce>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3836701844657!2d110.40188420000001!3d-7.7490670999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5942a4557921%3A0x9d87b74f86efff53!2sHMD%20property%20Mandiry!5e0!3m2!1sid!2sid!4v1727552846602!5m2!1sid!2sid"
          width="100%"
          height="500px"
          style={{ border: 0, outline: "none" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Fade>
    </Fragment>
  );
}
