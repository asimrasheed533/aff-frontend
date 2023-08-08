import React from "react";
import { PngScentpersonalbackground, WebpScentsolutionPng } from "../assets";

export default function Scentperonalcare() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={PngScentpersonalbackground}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">Personal Care</div>

          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <section className="scentsectionall">
        <div className="scentsectionall__content">
          <div className="scentsectionall__content__info">
            Creating a fragrance for a personal care product is a thoughtful
            process that intertwines science and art. Consider a body lotion
            designed for nighttime use. We delve deep into the science of
            calming olfactory molecules and skin-compatible fixatives, and align
            it with consumer insights for night-time skincare routines. The
            result? An aroma that whispers relaxation and complements the
            soothing texture of the lotion.
          </div>
        </div>
      </section>
    </>
  );
}
