import {
  SvgHomebttomleft,
  WebpFruitsimgPng,
  WebpHomesectionbackgroundPng,
  WebpOurinventorysectionbackgroundimgPng,
  WebpRegulatorysectionbackgroundPng,
  WebpSpeaksectionPng,
} from "../assets";

import ApplicationsSection from "../components/ApplicationsSection";
import Certificationssection from "../components/certificationssection";
import Joinsection from "../components/joinsection";

export default function Index() {
  return (
    <>
      <section className="Homesection">
        <div className="Homesection__background">
          <img
            className="Homesection__background__img"
            src={WebpHomesectionbackgroundPng}
            alt="homesectionbackground"
          />
        </div>
        <div className="Homesection__content">
          <div className="Homesection__content__overlay">
            <div className="Homesection__content__overlay__content">
              <div className="Homesection__content__overlay__heading">
                World-Class Flavours Exceptional Fragrances
                <span> 100% made by AFF.</span>
              </div>
              <button className="Homesection__content__overlay__button">
                Find out more
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="Homesectionbottom">
        <div className="Homesectionbottom__content">
          <div className="Homesectionbottom__content__overlay">
            <div className="Homesectionbottom__content__overlay__content">
              <div className="Homesectionbottom__content__overlay__left">
                <img
                  loading="lazy"
                  src={SvgHomebttomleft}
                  alt="homebttomleft"
                />
              </div>
              <div className="Homesectionbottom__content__overlay__right">
                <div className="Homesectionbottom__content__overlay__right__heading">
                  A Testament to <span> Originality.</span>
                </div>
                <div className="Homesectionbottom__content__overlay__right__info">
                  In collaboration with some of the world's most acclaimed
                  flavorists and perfumers, we're not just crafting flavors and
                  fragrances, we're designing sensory experiences from the
                  ground up.
                </div>
                <div className="Homesectionbottom__content__overlay__right__info">
                  This approach, which we term as 'Level 1 Flavor', stands as
                  testament to our commitment to originality - we aren't merely
                  tweaking base flavors sourced from other flavor houses or
                  using generic formulations; we are the source
                </div>
                <div className="Homesectionbottom__content__overlay__right__info">
                  What does this mean for you? Prices that make sense,
                  customizability that empowers, and a promise of no
                  compromises. Ever.
                </div>
                <button className="Homesectionbottom__content__overlay__right__button">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Departmentsection">
        <div className="Departmentsection__background">
          <img loading="lazy" src={WebpFruitsimgPng} alt="Fruits" />
        </div>
        <div className="Departmentsection__content">
          <div className="Departmentsection__content__overlay">
            <div className="Departmentsection__content__overlay__content">
              <div className="Departmentsection__content__overlay__heading">
                Our Regulatory Department doesn't just ensure compliance;
                <span>they guarantee peace of mind.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Speaksection">
        <div className="Speaksection__content__heading">
          We speak your <span> language.</span>
        </div>
        <div className="Speaksection__content">
          <div className="Speaksection__content__left">
            <div className="Speaksection__content__left__info">
              We deliver <span> comprehensive sensory solutions. </span> We
              consider the complexities of your formulation. Ingredient
              interactions.
            </div>
            <div className="Speaksection__content__left__info">
              At <span> AFF, </span> we view ourselves as an extension of your
              <span> R&D team, </span> a strategic partner dedicated to helping
              you overcome challenges and achieve success.
            </div>
            <button className="Homesectionbottom__content__overlay__right__button">
              Discover More
            </button>
          </div>
          <div className="Speaksection__content__left">
            <img loading="lazy" src={WebpSpeaksectionPng} alt="speak" />
          </div>
        </div>
      </section>
      <section className="Ourflavorinnovationssection">
        <div className="Ourflavorinnovationssection__background">
          <img
            loading="lazy"
            src={WebpOurinventorysectionbackgroundimgPng}
            alt="Fruits"
          />
          <div className="Ourflavorinnovationssection__content">
            <div className="Ourflavorinnovationssection__content__overlay">
              <div className="Ourflavorinnovationssection__content__overlay__content">
                <div className="Ourflavorinnovationssection__content__overlay__heading">
                  Our Flavor Innovations
                </div>
                <div className="Ourflavorinnovationssection__content__overlay__info">
                  With an elegant touch, we craft flavor solutions that are not
                  just tasteful but thoughtfully tailored to the needs of food
                  manufacturers. We blend ingenuity, health consciousness, and
                  nature's best to offer a flavorful portfolio designed for
                  impact and simplicity. Taste the future with AFF.
                </div>

                <div className="Ourflavorinnovationssection__content__cards">
                  <div className="Ourflavorinnovationssection__content__card">
                    <div className="Ourflavorinnovationssection__content__card__icon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1578 7.68787C12.272 7.76121 10.5691 8.43397 9.65811 9.34518C9.23506 9.76834 8.54908 9.76834 8.12603 9.34529C7.70287 8.92235 7.70276 8.23637 8.12581 7.81321C9.53135 6.40746 11.8187 5.61054 14.0735 5.52279C16.343 5.4345 18.8208 6.05591 20.556 7.79144C20.9789 8.21449 20.9789 8.90047 20.5558 9.32351C20.1327 9.74656 19.4467 9.74645 19.0237 9.32341C17.8417 8.14114 16.0288 7.61507 14.1578 7.68787Z"
                          fill="#D64C00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.1949 23.4683C27.2662 21.0162 28.5148 17.8465 28.5148 14.3853C28.5148 6.60719 22.2094 0.301758 14.4312 0.301758C6.65309 0.301758 0.347656 6.60719 0.347656 14.3853C0.347656 22.1635 6.65309 28.4689 14.4312 28.4689C17.8924 28.4689 21.0621 27.2203 23.5142 25.149L23.098 27.5418L31.238 35.6817L35.7276 31.1921L27.5877 23.0521L25.1949 23.4683ZM14.4312 25.2188C20.4144 25.2188 25.2647 20.3685 25.2647 14.3853C25.2647 8.40219 20.4144 3.55181 14.4312 3.55181C8.44809 3.55181 3.59771 8.40219 3.59771 14.3853C3.59771 20.3685 8.44809 25.2188 14.4312 25.2188Z"
                          fill="#D64C00"
                        />
                        <path
                          d="M32.7695 37.2152L37.2592 32.7256L38.7279 34.1944C39.5543 35.0209 39.5543 36.3609 38.7279 37.1874L37.2313 38.6839C36.4048 39.5104 35.0648 39.5104 34.2383 38.6839L32.7695 37.2152Z"
                          fill="#D64C00"
                        />
                      </svg>
                    </div>
                    <div className="Ourflavorinnovationssection__content__card__heading">
                      Functional Flavor Solutions
                    </div>
                    <div className="Ourflavorinnovationssection__content__card__info">
                      Our flavors go beyond just taste, contributing to
                      functionality and health. With our Functional Flavor
                      Solutions, we bridge the gap between wellness and taste,
                      enabling healthier options without compromising on flavor.
                    </div>
                  </div>
                  <div className="Ourflavorinnovationssection__content__card">
                    <div className="Ourflavorinnovationssection__content__card__icon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1578 7.68787C12.272 7.76121 10.5691 8.43397 9.65811 9.34518C9.23506 9.76834 8.54908 9.76834 8.12603 9.34529C7.70287 8.92235 7.70276 8.23637 8.12581 7.81321C9.53135 6.40746 11.8187 5.61054 14.0735 5.52279C16.343 5.4345 18.8208 6.05591 20.556 7.79144C20.9789 8.21449 20.9789 8.90047 20.5558 9.32351C20.1327 9.74656 19.4467 9.74645 19.0237 9.32341C17.8417 8.14114 16.0288 7.61507 14.1578 7.68787Z"
                          fill="#D64C00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.1949 23.4683C27.2662 21.0162 28.5148 17.8465 28.5148 14.3853C28.5148 6.60719 22.2094 0.301758 14.4312 0.301758C6.65309 0.301758 0.347656 6.60719 0.347656 14.3853C0.347656 22.1635 6.65309 28.4689 14.4312 28.4689C17.8924 28.4689 21.0621 27.2203 23.5142 25.149L23.098 27.5418L31.238 35.6817L35.7276 31.1921L27.5877 23.0521L25.1949 23.4683ZM14.4312 25.2188C20.4144 25.2188 25.2647 20.3685 25.2647 14.3853C25.2647 8.40219 20.4144 3.55181 14.4312 3.55181C8.44809 3.55181 3.59771 8.40219 3.59771 14.3853C3.59771 20.3685 8.44809 25.2188 14.4312 25.2188Z"
                          fill="#D64C00"
                        />
                        <path
                          d="M32.7695 37.2152L37.2592 32.7256L38.7279 34.1944C39.5543 35.0209 39.5543 36.3609 38.7279 37.1874L37.2313 38.6839C36.4048 39.5104 35.0648 39.5104 34.2383 38.6839L32.7695 37.2152Z"
                          fill="#D64C00"
                        />
                      </svg>
                    </div>
                    <div className="Ourflavorinnovationssection__content__card__heading">
                      Natural Flavor Solutions
                    </div>
                    <div className="Ourflavorinnovationssection__content__card__info">
                      Unearth the potent blend of nature and innovation. With
                      our Natural Flavor Solutions, we expertly craft authentic,
                      clean-label taste profiles from natural components. It's
                      the very essence of nature, captured in flavor form. Join
                      AFF on this delicious, natural journey.
                    </div>
                  </div>
                  <div className="Ourflavorinnovationssection__content__card">
                    <div className="Ourflavorinnovationssection__content__card__icon">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1578 7.68787C12.272 7.76121 10.5691 8.43397 9.65811 9.34518C9.23506 9.76834 8.54908 9.76834 8.12603 9.34529C7.70287 8.92235 7.70276 8.23637 8.12581 7.81321C9.53135 6.40746 11.8187 5.61054 14.0735 5.52279C16.343 5.4345 18.8208 6.05591 20.556 7.79144C20.9789 8.21449 20.9789 8.90047 20.5558 9.32351C20.1327 9.74656 19.4467 9.74645 19.0237 9.32341C17.8417 8.14114 16.0288 7.61507 14.1578 7.68787Z"
                          fill="#D64C00"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.1949 23.4683C27.2662 21.0162 28.5148 17.8465 28.5148 14.3853C28.5148 6.60719 22.2094 0.301758 14.4312 0.301758C6.65309 0.301758 0.347656 6.60719 0.347656 14.3853C0.347656 22.1635 6.65309 28.4689 14.4312 28.4689C17.8924 28.4689 21.0621 27.2203 23.5142 25.149L23.098 27.5418L31.238 35.6817L35.7276 31.1921L27.5877 23.0521L25.1949 23.4683ZM14.4312 25.2188C20.4144 25.2188 25.2647 20.3685 25.2647 14.3853C25.2647 8.40219 20.4144 3.55181 14.4312 3.55181C8.44809 3.55181 3.59771 8.40219 3.59771 14.3853C3.59771 20.3685 8.44809 25.2188 14.4312 25.2188Z"
                          fill="#D64C00"
                        />
                        <path
                          d="M32.7695 37.2152L37.2592 32.7256L38.7279 34.1944C39.5543 35.0209 39.5543 36.3609 38.7279 37.1874L37.2313 38.6839C36.4048 39.5104 35.0648 39.5104 34.2383 38.6839L32.7695 37.2152Z"
                          fill="#D64C00"
                        />
                      </svg>
                    </div>
                    <div className="Ourflavorinnovationssection__content__card__heading">
                      Innovative Applications
                    </div>
                    <div className="Ourflavorinnovationssection__content__card__info">
                      Step into a world of endless possibilities where our
                      flavors transform everyday products into extraordinary
                      experiences. We cater to a wide range of industries and
                      applications, enhancing the sensory appeal in each
                      application.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Regulatorysection">
        <div className="Regulatorysection__background">
          <img
            loading="lazy"
            src={WebpRegulatorysectionbackgroundPng}
            alt="Regulatorysection"
          />
        </div>
        <div className="Regulatorysection__content">
          <div className="Regulatorysection__content__overlay">
            <div className="Regulatorysection__content__overlay__content">
              <div className="Regulatorysection__content__overlay__left">
                <div className="Regulatorysection__content__overlay__left__info">
                  <span> At AFF, </span> we go beyond delivering exceptional
                  flavors and fragrances. Our dedicated regulatory department
                  ensures that all regulatory requirements are taken care of,
                  giving you peace of mind and freeing you to focus on your core
                  busines
                </div>
              </div>
              <div className="Regulatorysection__content__overlay__left">
                <div className="Regulatorysection__content__overlay__left__heading">
                  Our Regulatory Department doesn't just ensure compliance;
                  <span> they guarantee peace of mind. </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ApplicationsSection />
      <Certificationssection />
      <Joinsection />
    </>
  );
}
