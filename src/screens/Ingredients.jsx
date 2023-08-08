import React from "react";

import { Link } from "react-router-dom";
import { PngHomecaree, PngScentIngredientscarebackground } from "../assets";

export default function Scent() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={PngScentIngredientscarebackground}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">Ingredients</div>
          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <section className="scentsectionall">
        <div className="scentsectionall__content">
          <div className="scentsectionall__content__cards">
            <div className="scentsectionall__content__card">
              <div className="scentsectionall__content__card__img">
                <img loading="lazy" src={PngHomecaree} alt="scentcardimg1" />
              </div>
              <div className="scentsectionall__content__card__heading">
                Home Care
              </div>
              <Link
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                to="../Specialty"
                className="scentsectionall__content__card__button"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
