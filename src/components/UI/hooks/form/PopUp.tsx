"use client";

import React, { useState, Fragment } from "react";

import FormWhatsapp from "@/components/UI/hooks/form/FormWhatsapp";

import { RiWhatsappLine } from "@remixicon/react";

import "@/components/sass/layout.scss";

import { X } from "lucide-react";

export default function PopUp() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <div className="popup" onClick={() => setOpen(true)}>
        <RiWhatsappLine size={30} />
        <span>Hubungi Kami</span>
      </div>

      <div className={open ? "popup__content show" : "popup__content"}>
        <FormWhatsapp />
        <X onClick={() => setOpen(!open)} size={30} className="close" />
      </div>
    </Fragment>
  );
}
