import { WebpJoinbackgroundPng } from "../assets";

export default function joinsection() {
  return (
    <section className="join__section">
      <div className="join__section__content">
        <img
          loading="lazy"
          src={WebpJoinbackgroundPng}
          alt="joinbackground"
          className="join__section__content__img"
        />
        <div className="join__section__content__overlay">
          <div className="join__section__content__overlay__heading">
            Join the <span> AFF Family </span>
          </div>
          <div className="join__section__content__overlay__info">
            Ready to spice up your career? Join us at AFF, where every day is a
            new opportunity to stir up something extraordinary. Let's create the
            flavors of the future together.
          </div>
          <button className="join__section__content__overlay__button">
            Join Aff
          </button>
        </div>
      </div>
    </section>
  );
}
