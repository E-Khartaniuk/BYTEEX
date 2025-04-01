import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./ImageSlider.module.css";
import classNames from "classnames";

function ImageSlider({
  images,
  sliderSettings,
  dotsStyles = {},
  useCustomDots = true,
  imageClassName,
}) {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    ...(useCustomDots && {
      customPaging: (i) => (
        <a>
          <img
            src={images[i]}
            alt={`thumbnail-${i}`}
            className={css.thumbnail}
          />
        </a>
      ),
      appendDots: (dots) => (
        <div className={css.customDots} style={dotsStyles}>
          <ul>{dots}</ul>
        </div>
      ),
    }),
  };

  const settings = { ...defaultSettings, ...sliderSettings };

  return (
    <div className={css.sliderContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className={classNames(css.slideImage, imageClassName)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
