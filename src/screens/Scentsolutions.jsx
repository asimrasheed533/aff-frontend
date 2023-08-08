import {
  WebpAirPng,
  WebpCosmeticsPng,
  WebpFabricPng,
  WebpFinePng,
  WebpHomePng,
  WebpPersonalPng,
  WebpScentsolutionPng,
} from "../assets";

export default function ScentSolutions() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={WebpScentsolutionPng}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">Scent Solutions</div>
          <div className="about__hero__content__text">
            At AFF, we don't just concoct aromas; we curate olfactory iden es.
            For instance, when designing a signature scent for an avant-garde
            men’s grooming line, we draw on our extensive knowledge of aroma
            chemistry and market trends. We tailor fragrances to withstand
            varying pH levels, react posively with other ingredients, and
            importantly, resonate with your target demographic.
          </div>
          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <section className="ourstory__section">
        <div className="ourstory__section__content">
          <div className="ourstory__section__content__left">
            <img loading="lazy" src={WebpPersonalPng} alt="ourstoryimg" />
          </div>
          <div className="ourstory__section__content__left">
            <div className="ourstory__section__content__left__heading">
              Personal Care
            </div>
            <div className="ourstory__section__content__left__info">
              Creating a fragrance for a personal care product is a thoughtful
              process that intertwines science and art. Consider a body lotion
              designed for nighttime use. We delve deep into the science of
              calming olfactory molecules and skin-compatible fixatives, and
              align it with consumer insights for night-time skincare routines.
              The result? An aroma that whispers relaxation and complements the
              soothing texture of the lotion.
            </div>
          </div>
        </div>
        <div className="ourstory__section__content">
          <div className="ourstory__section__content__left">
            <div className="ourstory__section__content__left__heading">
              Home Care
            </div>
            <div className="ourstory__section__content__left__info">
              Home care fragrances need to satisfy two key elements: functional
              performance and emotional satisfaction. With a lemon-scented floor
              cleaner, for instance, we ensure the fragrance stands up against
              alkaline environments and simultaneously enhances user experience.
              The aroma doesn't merely mask the product's chemical profile; it
              delivers an uplifting sensory message that enhances the perception
              of cleanliness.
            </div>
          </div>
          <div className="ourstory__section__content__left">
            <img loading="lazy" src={WebpHomePng} alt="ourstoryimg" />
          </div>
        </div>
        <div className="ourstory__section__content">
          <div className="ourstory__section__content__left">
            <img loading="lazy" src={WebpFinePng} alt="ourstoryimg" />
          </div>
          <div className="ourstory__section__content__left">
            <div className="ourstory__section__content__left__heading">
              Fine Fragrances
            </div>
            <div className="ourstory__section__content__left__info">
              The fine fragrance sector is one of continuous evolution. When
              creating a luxury perfume inspired by a Mediterranean summer, we
              monitor olfactory trends, factor in evaporation kinetics, and keep
              our finger on the pulse of consumer preferences. Each element in
              the olfactory pyramid is thoughtfully curated, balancing artistry
              with market reception, to paint a vivid, lasting sensory picture.
            </div>
          </div>
        </div>
        <div className="ourstory__section__content">
          <div className="ourstory__section__content__left">
            <div className="ourstory__section__content__left__heading">
              Air Care
            </div>
            <div className="ourstory__section__content__left__info">
              Air care fragrances are transformative agents. A lavender-infused
              room spray isn't just about fragrance release; it's about malodor
              counteraction and space enhancement. We harness the calming
              properties of lavender, balance it with effective odor
              neutralizers, and ensure consistent diffusivity over time. The
              result is an olfactory narrative that changes the space's
              character into a serene haven.
            </div>
          </div>
          <div className="ourstory__section__content__left">
            <img loading="lazy" src={WebpAirPng} alt="ourstoryimg" />
          </div>
        </div>
        <div className="ourstory__section__content">
          <div className="ourstory__section__content__left">
            <img loading="lazy" src={WebpCosmeticsPng} alt="ourstoryimg" />
          </div>
          <div className="ourstory__section__content__left">
            <div className="ourstory__section__content__left__heading">
              Cosmetics
            </div>
            <div className="ourstory__section__content__left__info">
              Fragrances in cosme1cs amplify the product's appeal and the user's
              experience. When designing a scent for a luxury face cream, we
              factor in vola1liza1on rates, packaging interac1on, and market
              appeal. The aroma doesn't merely exist; it immerses the user in an
              indulgent experience that starts the moment they uncap the jar and
              lasts throughout the product’s life cycle.
            </div>
          </div>
        </div>
        <div className="ourstory__section__content">
          <div className="ourstory__section__content__left">
            <div className="ourstory__section__content__left__heading">
              Fabric Care
            </div>
            <div className="ourstory__section__content__left__info">
              CraOing fragrances for fabric care products is a marriage of
              science and consumer psychology. Suppose we're crea1ng an aroma
              for a tropical-themed fabric soOener. We consider how the scent
              molecules behave in high-temperature, water-rich environments,
              their substan1vity on various fabrics, and the emo1onal responses
              triggered by tropical scents. This me1culous approach delivers a
              cap1va1ng, durable fragrance that makes laundry day a sensorial
              delight
            </div>
          </div>
          <div className="ourstory__section__content__left">
            <img loading="lazy" src={WebpFabricPng} alt="ourstoryimg" />
          </div>
        </div>
      </section>
    </>
  );
}
