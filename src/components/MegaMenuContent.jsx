import { Link } from "react-router-dom";
import { WebpHeaderPatternPng } from "../assets";

export default function MegaMenuContent({ data, onClickAway }) {
  return (
    <div className="megamenu__content__column__content__wrapper">
      <img
        loading="lazy"
        className="megamenu__content__column__content__img"
        src={WebpHeaderPatternPng}
        alt={data?.title}
      />
      <div className="megamenu__content__column__content">
        <div className="megamenu__content__column__title">{data?.title}</div>
        <div className="megamenu__content__column__info">{data?.content}</div>
        <Link
          to={data?.contentLink}
          onClick={onClickAway}
          className="megamenu__content__column__btn"
        >
          Learn more
        </Link>
      </div>
      <div className="megamenu__content__img">
        <img loading="lazy" src={data?.img} alt="img" />
      </div>
    </div>
  );
}
