import {
  WebpCareersPng,
  WebpCulturesectionimgPng,
  WebpFlavorsectionimgPng,
  WebpFlavorsectionimgtwoPng,
  WebpProfessionaldevelopmentimgPng,
} from "../assets";

export default function Careers() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={WebpCareersPng}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">Careers </div>
        </div>
      </section>
      <section className="flavor__section">
        <div className="flavor__section__content">
          <div className="flavor__section__content__left">
            <div className="flavor__section__content__left__heading">
              Shape the <span>Future of Flavor</span>
            </div>
            <div className="flavor__section__content__left__info">
              Are you ready to brew a career that's as unique and vibrant as the
              flavors we create? At Advanced Flavors & Fragrances (AFF), were
              always on the hunt for those special few who can add an extra
              sprinkle of creativity, a dash of innovation, and a generous
              helping of passion to our team. Whether you're a seasoned
              flavorist, an eager scientist, or a dynamic sales professional, we
              believe that every role is a key ingredient in our recipe for
              success.
            </div>
          </div>
          <div className="flavor__section__content__left">
            <img
              loading="lazy"
              className="flavor__section__content__left__img"
              src={WebpFlavorsectionimgPng}
              alt="flavorsectionimg"
            />
          </div>
        </div>
        <div className="flavor__section__content">
          <div className="flavor__section__content__left">
            <img
              loading="lazy"
              className="flavor__section__content__left__img"
              src={WebpFlavorsectionimgtwoPng}
              alt="flavorsectionimg"
            />
          </div>
          <div className="flavor__section__content__left">
            <div className="flavor__section__content__left__heading">
              Unleash Your <span>Potential</span>
            </div>
            <div className="flavor__section__content__left__info">
              At AFF, we don't just provide jobs—we offer opportunities to
              inspire and be inspired, to challenge and be challenged. We
              believe that every individual brings a unique flavor to our team
              and we provide the ideal environment to let these flavors blossom.
              Here, you'll have the freedom to explore, to innovate, and to
              create'.
            </div>
          </div>
        </div>
      </section>
      <section className="culture__section">
        <img
          loading="lazy"
          src={WebpCulturesectionimgPng}
          alt="culturesectionimg"
          className="culture__section__img"
        />
        <div className="culture__section__overlay">
          <div className="culture__section__overlay__heading">
            A Culture <br /> of <span>Innovation </span>
          </div>
          <div className="culture__section__overlay__info">
            Our culture is driven by an insatiable curiosity and a relentless
            pursuit of excellence. We celebrate innovation and encourage new
            ideas. We don't just stay ahead of the curve—we aim to redefine it.
            With a career at AFF, you'll be at the forefront of flavor and
            fragrance technology, pushing boundaries and shaping the future of
            the industry.
          </div>
        </div>
      </section>
      <section className="professionaldevelopment__section">
        <img
          loading="lazy"
          src={WebpProfessionaldevelopmentimgPng}
          alt="culturesectionimg"
          className="culture__section__img"
        />
        <div className="professionaldevelopment__section__overlay">
          <div className="culture__section__overlay__heading">
            Professional <br /> <span>Development </span>
          </div>
          <div className="culture__section__overlay__info">
            Your growth is our success. That's why we're deeply committed to
            your professional development. We provide a plethora of learning
            opportunities, from in-depth training programs to stimulating
            workshops and seminars. You'll have the chance to learn from the
            best in the business, to gain valuable insights, and to hone your
            skills.
          </div>
        </div>
      </section>
    </>
  );
}
