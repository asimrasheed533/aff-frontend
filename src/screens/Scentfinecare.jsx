import React from "react";
import { PngScentfinecarebackground, PngScenthomebackground } from "../assets";

export default function Scentfinecare() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={PngScentfinecarebackground}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">Fine Fragrance</div>
          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <section className="scentsectionall">
        <div className="scentsectionall__content">
          <div className="scentsectionall__content__info">
            The fine fragrance sector is one of continuous evolution. When
            creating a luxury perfume inspired by a Mediterranean summer, we
            monitor olfactory trends, factor in evaporation kinetics, and keep
            our finger on the pulse of consumer preferences. Each element in the
            olfactory pyramid is thoughtfully curated, balancing artistry with
            market reception, to paint a vivid, lasting sensory picture.
          </div>
        </div>
      </section>
    </>
  );
}
