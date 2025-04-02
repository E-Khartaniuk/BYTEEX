import React from "react";
import css from "./ReviewCard.module.css";

function ReviewCard({ name = "name", text = "lorem20", photo }) {
  return (
    <article className={css.feedbackCard} key={name}>
      <div className={css.feedbackContainer}>
        <img src={photo} alt="feedback avatar" className={css.feedbackPhoto} />
        <div className={css.feedbackReviewsContainer}>
          <p className={css.name}>{name}</p>
        </div>
      </div>

      <p className={css.text}>{text}</p>
    </article>
  );
}

export default ReviewCard;
