import { WebpTeamPng, WebpTeamimgPng } from "../assets";

import TeamCard from "../components/TeamCard";

export default function Teams() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={WebpTeamPng}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">Our Team</div>
          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <div className="certification__text__section">
        Backing our R&D core is a dedicated procurement team, adept at sourcing
        top-quality raw materials from around the globe from origin sources. Our
        regulatory team complements this by proficiently navigating the
        intricate landscape of local and international food regulations to
        enable a fuss-free experience for our customers. <br /> <br />
        Serving a multitude of sectors from confectioneries, bakeries, dairies,
        to beverage manufacturers and pharmaceutical companies, our dedicated
        logistics and customer service teams underscore every interaction with
        quality, consistency, and excellence. <br /> <br />
        At Advanced Flavors & Fragrances, we're not just anticipating the future
        of flavors and fragrances - we're shaping it. We invite you to join us
        on this voyage of sensory discovery and innovation. Together, let's
        explore the limitless landscape of taste and aroma.
      </div>
      <div className="team__section__container">
        <TeamCard img={WebpTeamimgPng} name="Kamran Ali" designation="CEO" />
        <TeamCard img={WebpTeamimgPng} name="Kamran Ali" designation="CEO" />
        <TeamCard img={WebpTeamimgPng} name="Kamran Ali" designation="CEO" />
        <TeamCard img={WebpTeamimgPng} name="Kamran Ali" designation="CEO" />
        <TeamCard img={WebpTeamimgPng} name="Kamran Ali" designation="CEO" />
        <TeamCard img={WebpTeamimgPng} name="Kamran Ali" designation="CEO" />
      </div>
    </>
  );
}
