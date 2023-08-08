import { Link } from "react-router-dom";
import {
  PngManufacturingCardImg1,
  PngManufacturingCardImg2,
  PngManufacturingCardImg3,
  WebpManufacturingBg,
} from "../assets";

export default function Manufacturing() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={WebpManufacturingBg}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">Manufacturing</div>

          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <section className="manufacturing__cards">
        <div className="manufacturing__cards__content">
          <div className="manufacturing__cards__content__card">
            <img loading="lazy" src={PngManufacturingCardImg1} alt="Juice" />
            <div className="manufacturing__cards__content__card__overlay">
              <div className="manufacturing__cards__content__card__overlay__gradient"></div>
              <div className="manufacturing__cards__content__card__overlay__heading">
                Savor SensiMax™
              </div>
              <Link
                to="/sensimax"
                className="manufacturing__cards__content__card__overlay__btn"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="manufacturing__cards__content__card">
            <img loading="lazy" src={PngManufacturingCardImg2} alt="Juice" />
            <div className="manufacturing__cards__content__card__overlay">
              <div className="manufacturing__cards__content__card__overlay__gradient"></div>
              <div className="manufacturing__cards__content__card__overlay__heading">
                TasteGuard
              </div>
              <Link
                to="/tasteguard"
                className="manufacturing__cards__content__card__overlay__btn"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="manufacturing__cards__content__card">
            <img loading="lazy" src={PngManufacturingCardImg3} alt="Juice" />
            <div className="manufacturing__cards__content__card__overlay">
              <div className="manufacturing__cards__content__card__overlay__gradient"></div>
              <div className="manufacturing__cards__content__card__overlay__heading">
                FreshSeal™
              </div>
              <Link
                to="/freshseal"
                className="manufacturing__cards__content__card__overlay__btn"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
