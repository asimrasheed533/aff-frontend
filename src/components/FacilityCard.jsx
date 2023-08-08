export default function FacilityCard({ img, text }) {
  return (
    <div className="ourstory__section__content__facilit">
      <div className="ourstory__section__content__left__facilit">
        <div className="ourstory__section__content__left__info">{text}</div>
      </div>
      <div className="ourstory__section__content__left">
        <img loading="lazy" src={img} alt="ourstoryimg" />
      </div>
    </div>
  );
}
