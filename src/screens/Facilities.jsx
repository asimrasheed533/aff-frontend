import {
  WebpFacilitie1Png,
  WebpFacilitiesPng,
  WebpFacility2Png,
} from "../assets";

import FacilityCard from "../components/FacilityCard";

export default function Facilities() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={WebpFacilitiesPng}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">Our Facilities</div>

          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <FacilityCard
        img={WebpFacilitie1Png}
        text="Welcome to Advanced Flavors & Fragrances – the heart of innovation,
          quality, and extraordinary sensory experiences. Our 12,000 sq ft
          state-of-the-art food factory, nestled in the vibrant heart of
          Singapore, is a testament to our steadfast pursuit of industry
          excellence. The production floor boasts automated,
          pharmaceutical-grade machinery, ensuring stringent quality control and
          consistent output."
      />
      <div className="Facilities__backgound">
        <div className="Facilities__backgound__text">
          Our dedicated R&D facility, located separate from our production
          facility, is equipped with sophisticated analytical tools such as a
          Gas Chromatography Mass Spectrometer (GCMS), Spectrophotometer, and
          Accelerated Shelf-Life Testing(ASLT) machines. Our rigorous in house
          testing procedures, including microbiological, moisture, and
          physicochemical analyses, ensure our products consistently meet
          stringent quality parameters such as pH, density, and color stability.
        </div>
      </div>
      <div className="ourstory__section__content__facilit">
        <div className="ourstory__section__content__left">
          <img loading="lazy" src={WebpFacility2Png} alt="ourstoryimg" />
        </div>
        <div className="ourstory__section__content__left__facilit">
          <div className="ourstory__section__content__left__info">
            Our dedicated R&D facility, located separate from our production
            facility, is equipped with sophisticated analytical tools such as a
            Gas Chromatography Mass Spectrometer (GCMS), Spectrophotometer, and
            Accelerated Shelf-Life Testing(ASLT) machines. Our rigorous in house
            testing procedures, including microbiological, moisture, and
            physicochemical analyses, ensure our products consistently meet
            stringent quality parameters such as pH, density, and color
            stability.
          </div>
        </div>
      </div>
    </>
  );
}
