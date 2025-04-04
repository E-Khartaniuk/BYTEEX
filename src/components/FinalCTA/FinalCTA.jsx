import React from "react";
import css from "./FinalCTA.module.css";
import CTAButton from "../ui/CTAButton";
import StarsUnderCTA from "../ui/StarsUnderCTA/StarsUnderCTA";
import FinalCTAImageBlock from "../ui/FinalCTAImageBlock/FinalCTAImageBlock";
import Cards from "../ui/Cards/Cards";
import Advantages from "../ui/Advantages/Advantages";

function FinalCTA() {
  return (
    <section className={css.finalCTASection}>
      <div className={css.finalCTAContainer}>
        <h2 className="title">Find something you love.</h2>
        <p className={css.subTitle}>Click below to browse our collection!</p>

        <FinalCTAImageBlock />
        <CTAButton />
        <div className={css.starContainer}>
          <StarsUnderCTA />
        </div>
        <Cards />
        <Advantages />
      </div>
    </section>
  );
}

export default FinalCTA;
