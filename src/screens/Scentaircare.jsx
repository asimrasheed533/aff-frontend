import React from "react";
import { PngScentairbackground } from "../assets";

export default function Scentaircare() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={PngScentairbackground}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">Air Care</div>
          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <section className="scentsectionall">
        <div className="scentsectionall__content">
          <div className="scentsectionall__content__info">
            Air care fragrances are transformative agents. A lavender-infused
            room spray isn't just about fragrance release; it's about malodor
            counteraction and space enhancement. We harness the calming
            properties of lavender, balance it with effective odor neutralizers,
            and ensure consistent diffusivity over time. The result is an
            olfactory narrative that changes the space's character into a serene
            haven.
          </div>
        </div>
      </section>
    </>
  );
}
