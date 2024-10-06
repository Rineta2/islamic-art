"use client";

import React, { useState, useEffect } from "react";

import { profileHeader, navLink, navToogle } from "@/components/UI/data/data";

import Image from "next/image";

import Link from "next/link";

import { RiMenu5Line, RiCloseLine } from "@remixicon/react";

import { Fade } from "react-awesome-reveal"

export default function Header() {
  const [open, setOpen] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  }, []);

  return (
    <header className={`${fixed ? "fixed" : ""}`}>
      <nav className="nav container">
        {profileHeader.map((item: any) => {
          return (
            <Fade direction="left" duration={3000} delay={300} key={item.id}>
              <Image
                src={item.img}
                alt="logo"
                width={500}
                height={500}
                quality={100}
                key={item.id}
              />
            </Fade>
          );
        })}

        <ul className={`list ${open ? "show__menu" : ""}`}>
          {navLink.map((item: any) => {
            return (
              <li className="item" key={item.id}>
                <Fade direction="down" duration={3000} delay={item.id * 300} triggerOnce>
                  <Link href={item.path} className="nav__link">
                    {item.title}
                  </Link>
                </Fade>
              </li>
            );
          })}

          <div className="close" onClick={() => setOpen(false)}>
            <RiCloseLine size={40} />
          </div>
        </ul>

        <div className="nav__actions">
          <div className="hamburger">
            <Fade triggerOnce duration={3000} delay={300} direction="right">
              <RiMenu5Line
                onClick={() => setOpen(true)}
                className="menu__icon"
                size={30}
              />
            </Fade>
          </div>

          {navToogle.map((item: any) => {
            return (
              <Fade direction="right" duration={3000} delay={300} triggerOnce key={item.id}>
                <div key={item.id} className="btn__actions">
                  <Link href={item.path}>
                    {item.title}
                  </Link>
                </div>
              </Fade>
            );
          })}
        </div>
      </nav>
    </header>
  );
}