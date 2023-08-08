import React from "react";
import {
  PngScentcardimg1,
  PngScentcardimg2,
  PngScentcardimg3,
  PngScentcardimg4,
  PngScentcardimg5,
  WebpScentsolutionPng,
} from "../assets";
import { Link } from "react-router-dom";

export default function Scent() {
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
      <section className="scentsectionall">
        <div className="scentsectionall__content">
          <div className="scentsectionall__content__cards">
            <div className="scentsectionall__content__card">
              <div className="scentsectionall__content__card__img">
                <img
                  loading="lazy"
                  src={PngScentcardimg1}
                  alt="scentcardimg1"
                />
              </div>
              <div className="scentsectionall__content__card__heading">
                Personal Care
              </div>
              <Link
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                to="../Scentperonalcare"
                className="scentsectionall__content__card__button"
              >
                Learn more
              </Link>
            </div>
            <div className="scentsectionall__content__card">
              <div className="scentsectionall__content__card__img2">
                <img
                  loading="lazy"
                  src={PngScentcardimg2}
                  alt="scentcardimg1"
                />
              </div>
              <div className="scentsectionall__content__card__heading">
                Fine Fragrances
              </div>
              <Link
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                to="../Scentfinecare"
                className="scentsectionall__content__card__button"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="scentsectionall__content__cards">
            <div className="scentsectionall__content__card">
              <div className="scentsectionall__content__card__img3">
                <img
                  loading="lazy"
                  src={PngScentcardimg3}
                  alt="scentcardimg1"
                />
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
                to="../Scenthomecare"
                className="scentsectionall__content__card__button"
              >
                Learn more
              </Link>
            </div>
            <div className="scentsectionall__content__card">
              <div className="scentsectionall__content__card__img3">
                <img
                  loading="lazy"
                  src={PngScentcardimg4}
                  alt="scentcardimg1"
                />
              </div>
              <div className="scentsectionall__content__card__heading">
                Air Care
              </div>
              <Link
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                to="../Scentaircare"
                className="scentsectionall__content__card__button"
              >
                Learn more
              </Link>
            </div>
            <div className="scentsectionall__content__card">
              <div className="scentsectionall__content__card__img3">
                <img
                  loading="lazy"
                  src={PngScentcardimg5}
                  alt="scentcardimg1"
                />
              </div>
              <div className="scentsectionall__content__card__heading">
                Cosmetics
              </div>
              <Link
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                to="../Scentcosmeticscare"
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
