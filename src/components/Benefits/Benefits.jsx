import React from "react";
import css from "./Benefits.module.css";
import ImageSlider from "../ui/ImageSlider/ImageSlider";
import WhiteRobe1 from "../../img/WhiteRobe.jpg";
import WhiteRobe2 from "../../img/WhiteRobe2.jpg";
import logo1 from "../../img/companyLogos/Artboard2 1.png";
import logo2 from "../../img/companyLogos/Artboard3 1.png";
import logo3 from "../../img/companyLogos/Artboard4 1.png";
import logo4 from "../../img/companyLogos/Artboard5 1.png";
import logo5 from "../../img/companyLogos/Artboard6 1.png";
import Cloud from "../../icons/cloud";
import Icon1 from "../../icons/icon1";
import Leafe from "../../icons/leafe";
import Icon3 from "../../icons/icon3";
import CTAButton from "../ui/CTAButton";
import StarsUnderCTA from "../ui/StarsUnderCTA/StarsUnderCTA";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${css.customNextArrow}`}
      style={{ ...style }}
      onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 18L15 12L9 6"
          stroke=" #676869"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${css.customPrevArrow}`}
      style={{ ...style }}
      onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M15 18L9 12L15 6"
          stroke=" #676869"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

function Benefits() {
  const slider1Images = [WhiteRobe1, WhiteRobe2];
  const slider2Images = [logo1, logo2, logo3, logo4, logo5];

  const slider1Settings = {
    speed: 500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slider2Settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className={css.benefitsSection}>
      <div className={css.container}>
        <p className={css.asSeen}>as seen in</p>
        <div className={css.logoSliderContainer}>
          <ImageSlider
            images={slider2Images}
            sliderSettings={slider2Settings}
            useCustomDots={false}
            imageClassName={css.logoImage}
          />
        </div>

        <ul className={css.desktopList}>
          {slider2Images.map((img, index) => (
            <li key={index} className={css.desktopListItem}>
              <img src={img} alt={`logo${index}`} />
            </li>
          ))}
        </ul>

        <h2 className={css.title}>Loungewear you can be proud of.</h2>
        <div className={css.benefitsSlider}>
          <ImageSlider
            images={slider1Images}
            sliderSettings={slider1Settings}
            dotsStyles={{ bottom: "30px" }}
            imageClassName={css.benefitsImage}
          />
          <p className={css.productName}>White Robe</p>
        </div>

        <ul className={css.benefitsList}>
          <li className={css.benefitsItem}>
            <Cloud />
            <div className={css.benefitsListItemContainer}>
              <h4 className={css.benefitsItemTitle}>Ethically sourced.</h4>
              <p className={css.benefitsItemText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat.
              </p>
            </div>
          </li>
          <li className={css.benefitsItem}>
            <Icon1 />
            <div className={css.benefitsListItemContainer}>
              <h4 className={css.benefitsItemTitle}>Ethically sourced.</h4>
              <p className={css.benefitsItemText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat.
              </p>
            </div>
          </li>
          <li className={css.benefitsItem}>
            <Leafe />
            <div className={css.benefitsListItemContainer}>
              <h4 className={css.benefitsItemTitle}>Ethically sourced.</h4>
              <p className={css.benefitsItemText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat.
              </p>
            </div>
          </li>
          <li className={css.benefitsItem}>
            <Icon3 />
            <div className={css.benefitsListItemContainer}>
              <h4 className={css.benefitsItemTitle}>Ethically sourced.</h4>
              <p className={css.benefitsItemText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat.
              </p>
            </div>
          </li>
        </ul>
        <div className={css.ctaContainer}>
          <CTAButton />
          <StarsUnderCTA />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
