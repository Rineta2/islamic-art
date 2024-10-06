import React from 'react'

import dynamic from 'next/dynamic'

import "@/components/sass/page.scss"

import { ToastContainer } from "react-toastify";

const Heading = dynamic(
  () => import("@/components/UI/hooks/pages/rsvp/Heading"),
  {
    ssr: false,
  }
);

const FormContent = dynamic(
  () => import("@/components/UI/hooks/pages/rsvp/FormContent"),
  {
    ssr: false,
  }
);

export default function RSVP() {
  return (
    <section className='rsvp'>
      <div className="rsvp__container container">
        <div className="content">
          <Heading />

          <FormContent />
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}