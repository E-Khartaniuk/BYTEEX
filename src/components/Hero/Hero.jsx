import React from "react";
import css from "./Hero.module.css";
import CTAButton from "../ui/CTAButton";
import AnnouncementBar from "../ui/AnnouncementBar";
import Logo from "../ui/Logo";
import ImgBlock from "../ui/ImgBlock/ImgBlock";
import Icon1 from "../../icons/icon1";
import Icon2 from "../../icons/icon2";
import Icon3 from "../../icons/icon3";
import FeedbackCard from "../ui/FeedbackCard/FeedbackCard";
import feedbackPhoto from "../../img/feedbackPhoto.png";

function Hero() {
  return (
    <section className={css.heroSection}>
      <div className={css.heroContainer}>
        <AnnouncementBar />
        <a href="/" className={css.logo}>
          <Logo />
        </a>

        <h1 className={css.heroTitle}>
          Don’t apologize for being comfortable.
        </h1>

        <ImgBlock />

        <ul className={css.list}>
          <li className={css.listItem}>
            <Icon1 />
            <p className={css.listItemtext}>
              Beautiful, comfortable loungewear for day or night.
            </p>
          </li>
          <li className={css.listItem}>
            <Icon2 />
            <p className={css.listItemtext}>
              No wasteful extras, like tags or plastic packaging.
            </p>
          </li>
          <li className={css.listItem}>
            <Icon3 />
            <p className={css.listItemtext}>
              Our signature fabric is incredibly comfortable — unlike anything
              you’ve ever felt.
            </p>
          </li>
        </ul>
        <CTAButton />
      </div>
      <FeedbackCard
        name="Jane, S."
        photo={feedbackPhoto}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo."
      />
    </section>
  );
}

export default Hero;
