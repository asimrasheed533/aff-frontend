export default function TasteSolutionsCard({ img }) {
  return (
    <div className="taste__flavor__content__cards__card">
      <img loading="lazy" src={img} alt="Juice" />
      <div className="taste__flavor__content__cards__card__overlay__gradient"></div>
      <div className="taste__flavor__content__cards__card__overlay">
        <div className="taste__flavor__content__cards__card__overlay__heading">
          Beverages
        </div>
        <div className="taste__flavor__content__cards__card__overlay__info">
          In the baking process, flavors must withstand high temperatures and
          prolonged heat exposure. We've specifically engineered our bakery
          flavors to retain their full, lush profiles even when subjected to the
          rigors of baking.
        </div>
      </div>
    </div>
  );
}
