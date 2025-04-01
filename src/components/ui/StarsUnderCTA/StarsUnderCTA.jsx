import React from "react";
import Stars from "../../../icons/Stars";
import css from "./StarsUnderCTA.module.css";

function StarsUnderCTA() {
  return (
    <div className={css.StarsUnderCTAContainer}>
      <Stars />
      <span className={css.text}>Over 500+ 5 Star Reviews Online</span>
    </div>
  );
}

export default StarsUnderCTA;
