import React from "react";
import { PngFreshsealmg, PngStepcardboxmg } from "../assets";

export default function Freshseal() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={PngFreshsealmg}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">TasteGuard</div>

          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <section className="FreshSeal__main__container">
        <div className="FreshSeal__stages__container">
          <div className="FreshSeal__stages__container__stage">
            <div className="FreshSeal__stages__container__stage__heading">
              1
            </div>
            <div className="FreshSeal__stages__container__stage__subheading">
              stage
            </div>
          </div>
          <div className="FreshSeal__stages__container__stage__line"></div>
          <div className="FreshSeal__stages__container__stage">
            <div className="FreshSeal__stages__container__stage__heading">
              2
            </div>
            <div className="FreshSeal__stages__container__stage__subheading">
              stage
            </div>
          </div>
        </div>
        <div className="FreshSeal__stages__card__contraier">
          <div className="FreshSeal__stages__card__wraper">
            <div className="FreshSeal__stages__card__wraper__heading">
              High Barrier Technology
            </div>
            <div className="FreshSeal__stages__card__wraper__subheading">
              A Shield Against Time
            </div>
            <div className="FreshSeal__stages__card__wraper__contant">
              Our innovative packaging solution employs a multi-layer High
              Barrier Technology, a formidable fortress that safeguards the
              freshness of our products. This isn't your everyday food
              packaging. The materials used are Food Grade, meticulously
              selected and rigorously tested to ensure they can withstand the
              unique challenges of storing food flavorings. This is science in
              action, material science to be precise. The composition and
              structure of the materials used in our High Barrier Technology
              play a critical role in its functionality. Each layer serves a
              specific purpose, working in unison to create a robust barrier
              against environmental factors that threaten the quality of our
              products.
            </div>
            <div className="FreshSeal__stages__card__wraper__img">
              <img src={PngStepcardboxmg} alt="step" />
            </div>
          </div>
          <div className="FreshSeal__stages__card__wraper">
            <div className="FreshSeal__stages__card__wraper__heading">
              FreshSeal™
            </div>
            <div className="FreshSeal__stages__card__wraper__subheading">
              A Vacuum Sealing System that Outsmarts Oxidation
            </div>
            <div className="FreshSeal__stages__card__wraper__contant">
              FreshSear", our proprietary Vacuum Sealing system, takes product
              preservation a step further. This isn't simply about sealing a
              package; its about creating a consistent, dependable seal that
              protects the integrity of our products. The brilliance of this
              method is in its effectiveness and simplicity: by removing air
              from the packaging thoroughly, we minimize the presence of oxygen.{" "}
              <br />
              <br />
              Oxygen, despite being vital for life, is a known adversary when it
              comes to food preservation. This ubiquitous element is notorious
              for accelerating the degradation of powder products. But how Poes
              this happen? Its all about oxidation, a chemical reaction that
              leads to flavor deterioration, loss of potency, and compromised
              quality. Through the use of our proprietary Vacuum Sealing system,
              we effectively inhibit oxidation, outsmarting nature and
              preserving the sensory delight our products promise.
              <br />
              <br />
              At Advanced Flavors & Fragrances (AFF), we intertwine the art of
              flavor creation with the science of preservation. We understand
              that in order to deliver a symphony of taste and aroma, we must
              first protect the conductors - the precious flavor and fragrance
              compounds in our products. And we do so with a potent blend of
              cutting-edge technology and rigorous science.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
