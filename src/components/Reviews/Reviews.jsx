import React from "react";
import css from "./Reviews.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CTAButton from "../ui/CTAButton";
import StarsUnderCTA from "../ui/StarsUnderCTA/StarsUnderCTA";
import FeedbackCard from "../ui/FeedbackCard/FeedbackCard";
import ImageGrid from "../ui/ImageGrid/ImageGrid";

function Reviews() {
  const reviewsData = [
    {
      name: "Juan, B.",
      photo: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo.",
      stars: false,
    },
    {
      name: "Maria, L.",
      photo: "",
      text: "Amazing product! Highly recommend to everyone.",
      stars: false,
    },
    {
      name: "Alex, T.",
      photo: "",
      text: "Great quality and fast shipping. Will buy again! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stars: false,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1248,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={css.reviewsSection}>
      <h2 className="title">What are our fans saying?</h2>
      <p className={css.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat. Fusce non nibh luctus.
      </p>
      <ImageGrid />
      <div className={`${css.reviewsSlider} reviews-slider`}>
        <Slider {...sliderSettings}>
          {reviewsData.map((review, index) => (
            <FeedbackCard
              key={review.name + index}
              name={review.name}
              photo={review.photo}
              text={review.text}
              stars={review.stars}
            />
          ))}
        </Slider>
      </div>
      <CTAButton />
      <StarsUnderCTA />
    </section>
  );
}

export default Reviews;
