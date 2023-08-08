import React from "react";
import { PngSensimaxmg } from "../assets";

export default function SensiMax() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={PngSensimaxmg}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">Savor SensiMax™</div>

          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <section className="section__text">
        SensiMaxm is a game-changer in flavor enhancement. Harnessing the power
        of molecular science, and the unique combination of aromatics, SensiMaxm
        turns up the volume on flavor profiles, creating a symphony of taste
        that resonates with consumers. It is a flavor booster proprietary to
        AFF, that creates the complex profile that helps your product
        distinguish from your competitors in the marketplace.
      </section>
    </>
  );
}
