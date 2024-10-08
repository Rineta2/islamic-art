import React from "react";
import dynamic from "next/dynamic";

const Profile = dynamic(() => import("@/components/UI/hooks/section/footer/Profile"), { ssr: false });
const Deskripsi = dynamic(() => import("@/components/UI/hooks/section/footer/Deskripsi"), { ssr: false });
const Social = dynamic(() => import("@/components/UI/hooks/section/footer/Social"), { ssr: false });
const Navigation = dynamic(() => import("@/components/UI/hooks/section/footer/Navigation"), { ssr: false });
const Documentation = dynamic(() => import("@/components/UI/hooks/section/footer/Documentation"), { ssr: false });
const Legal = dynamic(() => import("@/components/UI/hooks/section/footer/Legal"), { ssr: false });

export default function Footer() {
  return (
    <footer>
      <div className="footer__container container">
        <div className="content">
          <div className="profile">
            <Profile />
            <Deskripsi />
            <div className="social">
              <Social />
            </div>
          </div>

          <div className="footer__list">
            <div>
              <h1>Navigation</h1>
              <ul className="list">
                <Navigation />
              </ul>
            </div>

            <div>
              <h1>Documentation</h1>
              <ul className="list">
                <Documentation />
              </ul>
            </div>

            <div>
              <h1>Legal</h1>
              <ul className="list">
                <Legal />
              </ul>
            </div>
          </div>
        </div>

        <p className="copyright">
          © 2024 Copyright rineta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}