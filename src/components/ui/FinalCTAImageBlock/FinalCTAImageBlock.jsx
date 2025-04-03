import React from "react";
import css from "./FinalCTAImageBlock.module.css";
import mainImage from "../../../img/finalCTAcenter.png";
import leftImg from "../../../img/finalCTAleft.png";
import rightImg from "../../../img/finalCTAright.png";

function FinalCTAImageBlock() {
  return (
    <div className={css.imgContainer}>
      <div className={css.imgWrapperLeft}>
        <img src={leftImg} alt="relax" className={css.leftImage} />
      </div>
      <div className={css.imgWrapperRight}>
        <img src={rightImg} alt="relax" className={css.rightImage} />
      </div>

      <img src={mainImage} alt="relax" className={css.mainImage} />
    </div>
  );
}

export default FinalCTAImageBlock;
