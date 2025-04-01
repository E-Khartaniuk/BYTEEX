import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules"; // Подключаем нужные модули
import "swiper/css"; // Базовые стили Swiper
import css from "./ImageSlider.module.css";

function ImageSlider({ images, swiperSettings }) {
  const thumbsSwiper = useRef(null); // Реф для управления превью-слайдером

  const defaultSettings = {
    modules: [Navigation, Thumbs], // Подключаем модули
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    thumbs: {
      swiper:
        thumbsSwiper.current && !thumbsSwiper.current.destroyed
          ? thumbsSwiper.current
          : null,
    },
  };

  const settings = { ...defaultSettings, ...swiperSettings };

  return (
    <div className={css.sliderContainer}>
      {/* Основной слайдер */}
      <Swiper {...settings} className={css.mainSwiper}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className={css.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Превью-слайдер */}
      <Swiper
        onSwiper={(swiper) => (thumbsSwiper.current = swiper)} // Устанавливаем реф
        modules={[Thumbs]}
        spaceBetween={10}
        slidesPerView={images.length > 3 ? 3 : images.length} // Показываем до 3 превью
        watchSlidesProgress
        centeredSlides
        loop={true}
        className={css.thumbsSwiper}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Thumb ${index}`}
              className={css.thumbImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
