import { WebpCertificationsimgPng } from "../assets";

export default function CertificationSection() {
  return (
    <>
      <section className="certifications__section">
        <div className="certifications__section__content">
          <div className="certifications__section__content__left">
            <div className="certifications__section__content__left__heading">
              Certifications
            </div>
            <div className="certifications__section__content__left__info">
              Quality isn't just our promise;
            </div>
            <div className="certifications__section__content__left__info__two">
              it's our pedigree.
            </div>
          </div>
          <div className="certifications__section__content__left">
            <img
              loading="lazy"
              src={WebpCertificationsimgPng}
              alt="certificationsimg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
