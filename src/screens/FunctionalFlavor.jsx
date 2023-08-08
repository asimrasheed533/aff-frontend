import React from "react";
import {
  PngFuncrd1,
  PngFuncrd2,
  PngFuncrd3,
  PngFuncrd4,
  PngFuncrd5,
  PngFuncrd6,
  PngFuncrd7,
  PngFunctionalFlavor,
} from "../assets";
export default function FunctionalFlavor() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={PngFunctionalFlavor}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">
            Functional Flavor Application
          </div>
          <div style={{ width: "70%" }} className="about__hero__content__text">
            Flavor with a mission. At AFF, we're pioneering in more than just
            taste delivery - we're addressing real-world challenges within your
            product matrix. With every flavor formulated 100% in-house, we've
            got the reins from the primary volatile to the final ester. We're
            not just your flavor provider, but your co-pilot in product
            development.
          </div>
          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <div className="function__contant__text">
        Flavor with a mission. At AFF, we're pioneering in more than just taste
        delivery - we're addressing real-world challenges within your product
        matrix. With every flavor formulated 100% in-house, we've got the reins
        from the primary vola.le to the final ester. We're not just your flavor
        provider, but your co-pilot in product development.
      </div>
      <section className="function__card__main__container">
        <FunctionFlavor
          img={PngFuncrd1}
          heading="Odor Masking"
          subheading=" Some ingredients emit pronounced off-notes. Take fish oil supplements
          - we've devised specific masking flavors, employing flavor modulators
          to neutralize those fishy notes, enhancing the overall organoleptic
          experience"
        />
        <FunctionFlavor
          img={PngFuncrd2}
          heading="Salt Reduction"
          subheading=" Sodium reduction in products like potato chips can seem insurmountable. However, using our in-house developed salt-enhancing flavors, we've enabled brands to slash sodium content while preserving that savory gustatory punch consumers love."
        />
        <FunctionFlavor
          img={PngFuncrd3}
          heading="Sugar Reduction"
          subheading=" Balancing sweetness in reduced-sugar beverages is a common conundrum. Our sugar-enhancing flavors, carefully engineered to interact optimally with the product's matrix, have enabled brands to significantly cut sugar content in carbonated drinks while maintaining a full sweetness profile."
        />
        <FunctionFlavor
          img={PngFuncrd4}
          heading="Bitterness Blocking"
          subheading=" Ingredients like whey protein can introduce a biter taste in sports nutrition products. Our biterness-blocking flavors harmonize with such ingredients, quelling their intensity and improving overall taste acceptance"
        />
        <FunctionFlavor
          img={PngFuncrd5}
          heading="Texture Enhancement"
          subheading=" Achieving the right mouthfeel in plant-based dairy alternatives is a challenge. We've crafted flavors that augment the perception of creaminess, eliciting a true dairy-like experience in products like plant-based cheese"
        />
        <FunctionFlavor
          img={PngFuncrd6}
          heading="Heat Stability"
          subheading=" Ensuring flavor integrity in high-temperature processed goods such as baked snacks can be demanding. With our heat-stable flavors, we've guaranteed a consistent flavor profile, irrespective of processing conditions"
        />
        <FunctionFlavor
          img={PngFuncrd7}
          heading="Shelf-life Extension"
          subheading=" Maintaining flavor impact in long shelf-life products like canned soups can be daunting. We've innovatively engineered flavors that retain their organoleptic impact throughout the product's shelf-life."
        />
      </section>
      <div className="function__contant__text">
        We create all our flavor formulations 100% in-house, giving us unrivaled
        control over their attributes, ensuring optimal solubility, and allowing
        us to modulate them as needed. This mastery over flavor characteristics
        enables us to tailor our offerings to your specific challenges. <br />
        <br />
        With AFF's Functional Flavor Applications, you'll leverage the power of
        flavors that are as functional as they are palatable, crafted by a
        partner who truly comprehends your needs.
      </div>
    </>
  );
}

function FunctionFlavor({ img, heading, subheading }) {
  return (
    <div className="function__card__wraper">
      <div className="function__card__wraper__img">
        <img src={img} alt="flavor" />
      </div>
      <div className="function__card__wraper__contant">
        <div className="function__card__wraper__heading">{heading}</div>
        <div className="function__card__wraper__subheading">{subheading}</div>
      </div>
    </div>
  );
}
