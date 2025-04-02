import React from "react";
import css from "./HeroFeedbackCard.module.css";
import Stars from "../../../icons/Stars";

function HeroFeedbackCard({ name, text, photo, stars = true }) {
  return (
    <article className={css.feedbackCard}>
      <div className={css.feedbackContainer}>
        <img src={photo} alt="feedback avatar" className={css.feedbackPhoto} />
        <div className={css.feedbackReviewsContainer}>
          <Stars height={10} />
          {stars && (
            <span className={css.reviewsOnline}>
              One of 500+ 5 Star Reviews Online
            </span>
          )}
          <p className={css.name}>{name}</p>
        </div>
      </div>
      <p className={css.text}>{text}</p>
    </article>
  );
}

export default HeroFeedbackCard;
