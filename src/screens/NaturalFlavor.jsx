import React from "react";
import { PngNaturalfav, PngNaturalFlavor } from "../assets";
export default function NaturalFlavor() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={PngNaturalFlavor}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">
            Natural Flavor Solutions
          </div>
          <div style={{ width: "70%" }} className="about__hero__content__text">
            At AFF, we understand the market's ongoing shift towards natural
            ingredients, as well as the challenges it presents. We see the
            complexity of natural flavors, the nuances in their profiles, and
            the sensitivity they have towards various processing conditions and
            matrices. And we embrace it all, turning these challenges into
            opportunities to create compelling natural flavor solutions.
          </div>
          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <section className="natural__flavor__container">
        <div className="natural__flavor__container__wraper">
          <div className="natural__flavor__container__wraper__img">
            <img src={PngNaturalfav} alt="Flavor" />
          </div>
          <div className="natural__flavor__container__wraper__contant">
            Let's consider the case of a citrus flavor for a sparkling water
            application. We would begin with an olfactory analysis of the real
            fruit, capturing the precise aroma profile. We then take this
            profile and meticulously rebuild it using our in-house derived and
            synthesized natural flavor components, making sure that the
            resulting flavor bears a true-to-fruit character. Furthermore, we
            factor in the flavor's performance in a high-water activity system
            like sparkling water, ensuring that the flavor's impact remains
            consistent throughout the product's shelf life. <br />
            <br />
            Or take the case of a natural berry flavor for a granola bar.
            Berries contain numerous polar compounds, contributing to their
            fresh, juicy character. We use our expertise to capture these
            nuances, crafting a flavor that delivers an authentic berry
            experience. We also factor in the dry, high-fat matrix of a granola
            bar, ensuring that the flavor remains stable and impactful.
            <br />
            <br />
            In scenarios where natural flavors present certain challenges - say,
            a shorter shelf-life or a more delicate flavor profile compared to
            their ar;tificial counterparts - we employ various techniques such
            as flavor encapsulation to protect the flavor and enhance its
            performance.
            <br />
            <br />
            Through AFF's Natural Flavor Solutions, we offer you the opportunity
            to marry the authenticity of natural flavors with the robust
            performance demanded by modern food systems, all under the guidance
            of a partner who truly understands the terrain.
            <br />
          </div>
        </div>
      </section>
    </>
  );
}
