import React from "react";
import css from "./Hero.module.css";
import CTAButton from "../ui/CTAButton";
import AnnouncementBar from "../ui/AnnouncementBar";
import Logo from "../ui/Logo";
import ImgBlock from "../ui/ImgBlock/ImgBlock";
import Icon1 from "../../icons/icon1";
import Icon2 from "../../icons/icon2";
import Icon3 from "../../icons/icon3";
import feedbackPhoto from "../../img/feedbackPhoto.png";
import HeroFeedbackCard from "../ui/HeroFeedbackCard/HeroFeedbackCard";

function Hero() {
  return (
    <section className={css.heroSection}>
      <AnnouncementBar />

      <div className={css.heroContainer}>
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
      <div className={css.feedbackCardContainer}>
        <HeroFeedbackCard
          name="Jane, S."
          photo={feedbackPhoto}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo."
        />
      </div>
    </section>
  );
}

export default Hero;
