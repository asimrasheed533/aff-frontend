import { WebpCertificationPng, WebpCertificationsimgPng } from "../assets";

export default function Certifications() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={WebpCertificationPng}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">
            Our Certifications
          </div>
          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <div className="certification__text__section">
        Licensed as a Food Manufacturing Facility by the Singapore Food Agency
        and having obtained Halal and ISO22000 certifications, we constantly
        strive to cater to the diverse culinary and cultural needs of our global
        clientele. The robustness of our Food Safety Management System is
        emphasized by our ISO22000 certification, which inherently encompasses
        the scope of GMP and HACCP, attesting our commitment to food safety and
        hygiene. Nevertheless, to meet and exceed customer expectations, we are
        in the advanced stages of obtaining standalone GMP and HACCP
        certifications. <br /> <br />
        We conduct rigorous in-house testing procedures including
        microbiological, moisture, and physicochemical analyses, ensuring our
        products fulfill stringent quality parameters, such as pH, density, and
        color stability.
      </div>
      <div className="certification__img__container">
        <img
          loading="lazy"
          src={WebpCertificationsimgPng}
          alt="Certifications"
        />
      </div>
    </>
  );
}
