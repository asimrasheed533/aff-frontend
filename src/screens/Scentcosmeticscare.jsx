import React from "react";
import { PngScentcosmaticbackground } from "../assets";

export default function Scentcosmeticscare() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={PngScentcosmaticbackground}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">Cosmetics</div>
          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <section className="scentsectionall">
        <div className="scentsectionall__content">
          <div className="scentsectionall__content__info">
            Fragrances in cosme1cs amplify the product's appeal and the user's
            experience. When designing a scent for a luxury face cream, we
            factor in vola1liza1on rates, packaging interac1on, and market
            appeal. The aroma doesn't merely exist; it immerses the user in an
            indulgent experience that starts the moment they uncap the jar and
            lasts throughout the product’s life cycle.
          </div>
        </div>
      </section>
    </>
  );
}
