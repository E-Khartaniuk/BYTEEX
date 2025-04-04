import React from "react";
import Clock from "../../../icons/Clock";
import cards from "../../../img/Cards.png";
import css from "./Cards.module.css";

function Cards() {
  return (
    <div className={css.container}>
      <Clock /> <span className={css.text}>Ships in 1-2 Days</span>{" "}
      <img src={cards} alt="cards" />
    </div>
  );
}

export default Cards;
