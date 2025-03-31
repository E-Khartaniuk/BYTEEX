import React from "react";
import css from "./ImgBlock.module.css";
import mainImage from "../../../img/mainImg.png";
import leftImg from "../../../img/leftImg.png";
import rightImg from "../../../img/rightImg.png";

function ImgBlock() {
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

export default ImgBlock;
