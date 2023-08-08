import TasteSolutionsCard from "../components/TasteSolutionsCard";
import { WebpTasteSolutionsBgPng } from "../assets";
import {
  WebpFlavorCardImg,
  WebpFlavorCardImg2,
  WebpFlavorCardImg3,
  WebpFlavorCardImg4,
  WebpFlavorCardImg5,
  WebpFlavorCardImg6,
  WebpFlavorCardImg7,
  WebpFlavorCardImg8,
  WebpFlavorCardImg9,
  WebpFlavorCardImg10,
  WebpFlavorCardImg11,
  WebpFlavorCardImg12,
  WebpFlavorCardImg13,
  WebpFlavorCardImg14,
  WebpFlavorCardImg15,
} from "../assets";

export default function TasteSolutions() {
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
      <section className="taste__flavor">
        <div className="taste__flavor__content">
          <div className="taste__flavor__content__heading">
            Flavor <span>Applications</span>
          </div>
          <div className="taste__flavor__content__cards">
            <TasteSolutionsCard img={WebpFlavorCardImg} />
            <TasteSolutionsCard img={WebpFlavorCardImg2} />
            <TasteSolutionsCard img={WebpFlavorCardImg3} />
            <TasteSolutionsCard img={WebpFlavorCardImg4} />
            <TasteSolutionsCard img={WebpFlavorCardImg5} />
            <TasteSolutionsCard img={WebpFlavorCardImg6} />
            <TasteSolutionsCard img={WebpFlavorCardImg7} />
            <TasteSolutionsCard img={WebpFlavorCardImg8} />
            <TasteSolutionsCard img={WebpFlavorCardImg9} />
            <TasteSolutionsCard img={WebpFlavorCardImg10} />
            <TasteSolutionsCard img={WebpFlavorCardImg11} />
            <TasteSolutionsCard img={WebpFlavorCardImg12} />
            <TasteSolutionsCard img={WebpFlavorCardImg13} />
            <TasteSolutionsCard img={WebpFlavorCardImg14} />
            <TasteSolutionsCard img={WebpFlavorCardImg15} />
          </div>
          <div className="taste__flavor__content__text">
            At <span>Advanced Flavors & Fragrances</span>, we understand the
            complex chemistry and processing conditions of diverse food
            applications, providing exceptional flavor solutions that ensure
            outstanding performance across all applications.
          </div>
        </div>
      </section>
    </>
  );
}
