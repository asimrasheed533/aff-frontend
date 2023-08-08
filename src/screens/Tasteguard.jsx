import React from "react";
import { PngTasteguard } from "../assets";

export default function Tasteguard() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={PngTasteguard}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">TasteGuard</div>

          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <section className="section__text">
        All the product innovations in the world would not matter if the product
        were not protected properly. Freshness isn't just a quality, its a
        promise -a promise that TasteGuard'" is designed to keep. We are proud
        to present FlavorGuard., our two-stage process that ensures the
        preservation and protection of your flavor powder products.
      </section>
    </>
  );
}
