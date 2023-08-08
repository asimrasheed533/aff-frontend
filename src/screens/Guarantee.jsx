import { WebpGrantimgPng, WebpGurantiPng } from "../assets";

export default function Guarantee() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={WebpGurantiPng}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">Our Guarantee</div>

          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <div className="certification__text__section">
        Your satisfaction is paramount to us. We take pride in our stringent
        quality standards and are confident that our products will meet or
        exceed your expectations. However, in the unlikely event that our
        product does not align with these standards, we promise to make it right
        or replace it, at no cost to you. Please note: This guarantee applies
        only to products purchased from our authorized distributors or directly
        from Advanced Flavors & Fragrances, and only when the product has been
        stored and used in accordance with the provided instructions and is
        before expiry.
        <br />
        <br />
      </div>
      <div className="ourstory__section__content__granty">
        <div className="ourstory__section__content__left">
          <div className="ourstory__section__content__left__heading">
            Our
            <span style={{ color: "#D64C00", fontSize: "800" }}> Promise</span>
          </div>
          <div className="ourstory__section__content__left__info">
            Nevertheless, regardless of the circumstance, we will always seek to
            assist our customers to make the best of our products and provide
            technical support. Please do not hesitate to contact us should you
            require any assistance
          </div>
        </div>
        <div className="ourstory__section__content__left">
          <img loading="lazy" src={WebpGrantimgPng} alt="ourstoryimg" />
        </div>
      </div>
    </>
  );
}
