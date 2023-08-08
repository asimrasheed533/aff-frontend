import { WebpTasteSolutionsBgPng } from "../assets";
import {
  PngCustom,
  PngEssenceLock,
  PngFunctional,
  PngNatural,
} from "../assets";
import { Link } from "react-router-dom";
export default function Taste() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={WebpTasteSolutionsBgPng}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">Taste Solutions</div>
          <div style={{ width: "70%" }} className="about__hero__content__text">
            Embark with us on an epicurean expedition, where the past meets the
            present, where <span>science</span> meets <span>artistry</span>,
            where the ordinary becomes
            <span>extraordinary</span>.
          </div>
          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <section className="taste__flavor__content__main">
        <TasteFalvor
          link="/customflavor"
          img={PngCustom}
          text="Custom Flavor Solutions"
          svg={
            <svg
              width="25"
              height="23"
              viewBox="0 0 31 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.3287 12.7423C30.9145 12.1565 30.9145 11.2068 30.3287 10.621L20.7828 1.07504C20.197 0.489251 19.2473 0.489251 18.6615 1.07504C18.0757 1.66082 18.0757 2.61057 18.6615 3.19636L27.1467 11.6816L18.6615 20.1669C18.0757 20.7527 18.0757 21.7025 18.6615 22.2882C19.2473 22.874 20.197 22.874 20.7828 22.2882L30.3287 12.7423ZM0.611817 13.1816L29.2681 13.1816L29.2681 10.1816L0.611816 10.1816L0.611817 13.1816Z"
                fill="#D64C00"
              />
            </svg>
          }
        />
        <TasteFalvor
          link="/naturalflavor"
          img={PngEssenceLock}
          text="Natural Flavor Solutions"
          svg={
            <svg
              width="25"
              height="23"
              viewBox="0 0 31 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.3287 12.7423C30.9145 12.1565 30.9145 11.2068 30.3287 10.621L20.7828 1.07504C20.197 0.489251 19.2473 0.489251 18.6615 1.07504C18.0757 1.66082 18.0757 2.61057 18.6615 3.19636L27.1467 11.6816L18.6615 20.1669C18.0757 20.7527 18.0757 21.7025 18.6615 22.2882C19.2473 22.874 20.197 22.874 20.7828 22.2882L30.3287 12.7423ZM0.611817 13.1816L29.2681 13.1816L29.2681 10.1816L0.611816 10.1816L0.611817 13.1816Z"
                fill="#D64C00"
              />
            </svg>
          }
        />
        <TasteFalvor
          link="/functionalflavor"
          img={PngFunctional}
          text="Functional Flavor Application"
          svg={
            <svg
              width="25"
              height="23"
              viewBox="0 0 31 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.3287 12.7423C30.9145 12.1565 30.9145 11.2068 30.3287 10.621L20.7828 1.07504C20.197 0.489251 19.2473 0.489251 18.6615 1.07504C18.0757 1.66082 18.0757 2.61057 18.6615 3.19636L27.1467 11.6816L18.6615 20.1669C18.0757 20.7527 18.0757 21.7025 18.6615 22.2882C19.2473 22.874 20.197 22.874 20.7828 22.2882L30.3287 12.7423ZM0.611817 13.1816L29.2681 13.1816L29.2681 10.1816L0.611816 10.1816L0.611817 13.1816Z"
                fill="#D64C00"
              />
            </svg>
          }
        />
        <TasteFalvor
          link="/essenceLock"
          img={PngNatural}
          text="EssenceLock™"
          svg={
            <svg
              width="25"
              height="23"
              viewBox="0 0 31 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.3287 12.7423C30.9145 12.1565 30.9145 11.2068 30.3287 10.621L20.7828 1.07504C20.197 0.489251 19.2473 0.489251 18.6615 1.07504C18.0757 1.66082 18.0757 2.61057 18.6615 3.19636L27.1467 11.6816L18.6615 20.1669C18.0757 20.7527 18.0757 21.7025 18.6615 22.2882C19.2473 22.874 20.197 22.874 20.7828 22.2882L30.3287 12.7423ZM0.611817 13.1816L29.2681 13.1816L29.2681 10.1816L0.611816 10.1816L0.611817 13.1816Z"
                fill="#D64C00"
              />
            </svg>
          }
        />
      </section>
    </>
  );
}

function TasteFalvor({ img, text, svg, link }) {
  return (
    <Link to={link} className="taste__flavor__content__card">
      <div className="taste__flavor__content__card__img">
        <img src={img} alt="card" />
      </div>
      <div className="taste__flavor__card__text__container">
        <div className="taste__flavor__card__text__heading">{text}</div>
        <div className="taste__flavor__card__text__svg">{svg}</div>
      </div>
    </Link>
  );
}
