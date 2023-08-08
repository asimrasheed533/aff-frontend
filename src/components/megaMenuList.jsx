import { Link } from "react-router-dom";

export default function MegaMenuList({ data, onClickAway }) {
  return (
    <div className="megamenu__content__column__content__submenu">
      <ul className="megamenu__content__column__content__list">
        {data.map((item) => (
          <Link
            to={item.link}
            onClick={onClickAway}
            className="megamenu__content__column__content__list__item"
            key={item?.title}
          >
            {item?.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}
