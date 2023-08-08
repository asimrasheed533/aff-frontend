import React from "react";
import { PngScenthomebackground } from "../assets";

export default function Scentperonalcare() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={PngScenthomebackground}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">Home Care</div>
          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <section className="scentsectionall">
        <div className="scentsectionall__content">
          <div className="scentsectionall__content__info">
            Home care fragrances need to satisfy two key elements: functional
            performance and emotional satisfaction. With a lemon-scented floor
            cleaner, for instance, we ensure the fragrance stands up against
            alkaline environments and simultaneously enhances user experience.
            The aroma doesn't merely mask the product's chemical profile; it
            delivers an uplifting sensory message that enhances the perception
            of cleanliness.
          </div>
        </div>
      </section>
    </>
  );
}
