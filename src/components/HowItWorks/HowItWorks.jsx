import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./HowItWorks.module.css";
import CTAButton from "../ui/CTAButton";
import StarsUnderCTA from "../ui/StarsUnderCTA/StarsUnderCTA";
import ComfortCard from "../ui/ComfortCard/ComfortCard";
import Cart from "../../icons/Cart";
import Truck from "../../icons/Truck";
import Sun2 from "../../icons/Sun2";

function HowItWorks() {
  const items = [
    {
      id: 1,
      title: "You save.",
      text: "Browse our comfort sets and save 15% when you bundle.",
      icon: Cart,
    },
    {
      id: 2,
      title: "We ship.",
      text: "We ship your items within 1-2 days of receiving your order.",
      icon: Truck,
    },
    {
      id: 3,
      title: "You enjoy!",
      text: "Wear hernest around the house, out on the town, or in bed.",
      icon: Sun2,
    },
  ];

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${css.customArrow}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="#01005b"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${css.customArrow}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18L15 12L9 6"
            stroke="#01005b"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className={css.howItWorksSection}>
      <h2 className="title">Comfort made easy</h2>

      <div className={css.desktopList}>
        {items.map((item) => (
          <ComfortCard
            key={item.id}
            id={item.id}
            img={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>

      <div className={css.mobileSlider}>
        <Slider {...sliderSettings}>
          {items.map((item) => (
            <ComfortCard
              key={item.id}
              id={item.id}
              img={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </Slider>
      </div>

      <CTAButton />
      <StarsUnderCTA />
    </section>
  );
}

export default HowItWorks;
