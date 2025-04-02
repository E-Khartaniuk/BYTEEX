import React from "react";
import css from "./ComfortCard.module.css";

function ComfortCard({ id, img: Img, title, text }) {
  return (
    <div className={css.comfortCard} id={id}>
      {Img ? <Img className={css.img} /> : <span>No icon</span>}
      <h4 className={css.title}>{title}</h4>
      <p className={css.text}>{text}</p>
    </div>
  );
}

export default ComfortCard;
