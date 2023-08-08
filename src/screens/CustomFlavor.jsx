import React from "react";

import {
  PngCustomfvr,
  PngCustomfvr1,
  PngCustomfvr2,
  PngCustomfvr3,
} from "../assets";
export default function CustomFlavor() {
  return (
    <>
      <section className="about__hero">
        <img
          loading="lazy"
          className="about__hero__img"
          src={PngCustomfvr}
          alt="Image Containg Buildings"
        />
        <div className="about__hero__content">
          <div className="about__hero__content__heading">
            Custom Flavor Solutions
          </div>
          <div style={{ width: "70%" }} className="about__hero__content__text">
            Your unique product calls for a unique flavor. At AFF, we paint with
            a palette of taste, composing a symphony of sensory delight,
            tailor-made for your product. With the entire flavor engineered
            in-house, we masterfully orchestrate your product's flavor profile -
            from the ini.al top note to the lingering aftertaste.
          </div>
          <button className="about__hero__content__btn">
            Learn More About Us
          </button>
        </div>
      </section>
      <section className="custom__flavor__main__container">
        <CustomFlavorCard
          img={PngCustomfvr1}
          text="We at AFF recognize the challenges R&D teams face when trying to achieve
        a distinctive flavor profile while considering application requirements.
        Ingredient interactions, solubility, stability under different pH
        levels, temperatures, and humidity are among the many aspects we
        meticulously factor in while creating your custom flavor solution."
        />
        <CustomFlavorCard
          img={PngCustomfvr2}
          text="Take the development of flavors for oil-based applications, for instance. We consider how lipophilic flavor components will interact with the fatty matrix of your product, crafting flavors that remain stable and impactful even in such demanding applications. On the other hand, when working with high-protein products like protein bars, we know certain proteins may impart off-notes or exhibit undesirable organoleptic properties. In such scenarios, we take a two-pronged approach: developing flavors that enhance the appealing taste notes and simultaneously mitigating the less desirable ones."
        />
        <CustomFlavorCard
          img={PngCustomfvr3}
          text="And in the domain of baked goods, temperature stability is a common challenge. We engineer flavors to withstand high-temperature processing, ensuring that your product retains its desired flavor profile throughout the baking process and well beyond. We are also mindful of the growing interest in 'clean-label' products. To that end, we can offer natural, organic compliant, and non-GMO flavors, making sure your product meets both taste and labeling expectations.
          With AFF's Custom Flavor Solutions, you get a partner who understands and addresses your unique product challenges head-on, yielding flavors that harmonize with your product and captivate your consumers. "
        />
      </section>
    </>
  );
}

function CustomFlavorCard({ img, text }) {
  return (
    <div className="custom__flavor__main__container__waraper">
      <div className="custom__flavor__card__wraper__img">
        <img className="custom__flavor__card__img" src={img} alt="flavor" />
      </div>

      <div className="custom__flavor__card__wraper__contant">{text}</div>
    </div>
  );
}
