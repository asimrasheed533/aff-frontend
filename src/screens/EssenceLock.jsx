import React from "react";
import { PngEssenceLockimg } from "../assets";
export default function EssenceLock() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={PngEssenceLockimg}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">EssenceLock™</div>
          <div style={{ width: "70%" }} className="about__hero__content__text">
            AFF proudly introduces EssenceLock™, our innova.ve encapsulation
            technology. We're not just preserving flavors; we're eleva.ng them,
            ensuring maximum impact and longevity. Experience the fusion of
            science and sensory satisfaction with EssenceLock™ - the epitome of
            flavor encapsulation.
          </div>
          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <div className="essencelook__container__text">
        At AFF, we realize the potential of starch-based natural polymers in
        encapsulation technology. We leverage these properties in EssenceLock™,
        creating an encapsulation medium that optimizes flavor performance,
        efficiency, and shelf-life without breaking the bank. <br />
        <br />
        Our EssenceLock™ technology creates an encapsulating agent characterized
        by exceptional resistance to oxidation, minimizing losses during
        spray-drying, and extending your product's shelf-life. More importantly,
        it guards sensitive volatile components against oxidation, offering you
        improved product quality and performance. Let's consider a green
        tea-infused sports drink, for instance. With the inherent astringency
        and complexity of green tea, delivering a consistent flavor can be a
        challenge. EssenceLock™ encapsulates the tea flavor, protecting it from
        degradation and ensuring a gradual release during consumption,
        presenting consumers with a true-to-life green tea experience that
        lasts.
        <br />
        <br />
        Or think about a spicy BBQ-flavored snack, where the spice kick and
        smoky undertones must persist despite long shelf life. EssenceLock™
        locks in these delicate, volatile compounds, releasing them upon
        consumption, providing a continual sensory adventure with every bite.
        <br />
        <br />
        And how about a vanilla bean almond milk? The volatile vanillin
        compounds are vulnerable to degradation over ;me, potentially leading to
        flavor loss. With EssenceLock™, we encapsulate these volatile compounds,
        ensuring a steady, controlled release of the sweet, creamy vanilla
        flavor in every sip, even after extended storage.
        <br />
        <br />
        EssenceLock™ is more than an encapsulation technology; it is a
        commitment to flavor integrity, controlled release, and enhanced
        organoleptic impact. At AFF, we develop customized solutions that set
        your products apart
      </div>
    </>
  );
}
