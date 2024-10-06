import React, { Fragment } from 'react'

import Script from "next/script";

export default function GoogleTag() {
    return (
        <Fragment>
            <Script
                id="google-tag-manager"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NSQXTQGF');
        `,
                }}
            />

            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-NSQXTQGF"
                    height="0"
                    width="0"
                    style={{ display: "none", visibility: "hidden" }}
                ></iframe>
            </noscript>
        </Fragment>
    )
}
