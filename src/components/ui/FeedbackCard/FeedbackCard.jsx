import React from "react";
import css from "./FeedbackCard.module.css";
import Stars from "../../../icons/Stars";

function FeedbackCard({ name, text, photo }) {
  return (
    <article className={css.feedbackCard}>
      <div className={css.feedbackContainer}>
        <img src={photo} alt="feedback avatar" className={css.feedbackPhoto} />
        <div className={css.feedbackReviewsContainer}>
          <Stars />
          <span className={css.reviewsOnline}>
            One of 500+ 5 Star Reviews Online
          </span>

          <p className={css.name}>{name}</p>
        </div>
      </div>

      <p className={css.text}>{text}</p>
    </article>
  );
}

export default FeedbackCard;
