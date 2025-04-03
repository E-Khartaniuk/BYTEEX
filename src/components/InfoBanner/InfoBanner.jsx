import React from "react";
import CO2 from "../../icons/CO2";
import css from "./InfoBanner.module.css";
import H2O from "../../icons/H2O";
import Lightning from "../../icons/lightning";
function InfoBanner() {
  return (
    <section className={css.infoSection}>
      <h2 className={css.title}>Our total green impact</h2>

      <ul className={css.infoList}>
        <li className={css.infoItem}>
          <div className={css.imageContainer}>
            <CO2 />
          </div>

          <span className={css.value}>3,927 kg</span>
          <span className={css.description}>of CO2 saved</span>
        </li>
        <li className={css.infoItem}>
          <div className={css.imageContainer}>
            <H2O />
          </div>

          <span className={css.value}>2,546,167 days</span>
          <span className={css.description}>of drinking water saved</span>
        </li>
        <li className={css.infoItem}>
          <div className={css.imageContainer}>
            <Lightning />
          </div>

          <span className={css.value}>7,321 kWh</span>
          <span className={css.description}>of energy saved</span>
        </li>
      </ul>
    </section>
  );
}

export default InfoBanner;
