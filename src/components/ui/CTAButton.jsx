import React from "react";
import css from "./CTAButton.module.css";
import Arrow from "../../icons/Arrow";

function CTAButton() {
  return (
    <button className={css.CTAbutton}>
      <span className={css.CTAbuttonText}>Customize Your Outfit</span> <Arrow />
    </button>
  );
}

export default CTAButton;
