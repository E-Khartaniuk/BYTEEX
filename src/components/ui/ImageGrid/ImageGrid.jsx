import React from "react";
import css from "./ImageGrid.module.css";

// Пример изображений (замените на свои)
import img1 from "../../../gridImage/01.png";
import img3 from "../../../gridImage/02.png";
import img2 from "../../../gridImage/03.png";
import img4 from "../../../gridImage/04.png";
import img5 from "../../../gridImage/05.png";
import img6 from "../../../gridImage/06.png";
import img7 from "../../../gridImage/07.png";
import img8 from "../../../gridImage/08.png";
import img9 from "../../../gridImage/09.png";
import img10 from "../../../gridImage/10.png";
import img11 from "../../../gridImage/11.png";
import img12 from "../../../gridImage/12.png";
import img13 from "../../../gridImage/13.png";
import img14 from "../../../gridImage/14.png";
import img15 from "../../../gridImage/15.png";
import img16 from "../../../gridImage/16.png";
import img17 from "../../../gridImage/17.png";
import img18 from "../../../gridImage/18.png";
import img19 from "../../../gridImage/19.png";
import img20 from "../../../gridImage/20.png";
import img21 from "../../../gridImage/21.png";
import img22 from "../../../gridImage/22.png";

function ImageGrid() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
  ];

  return (
    <div className={css.imageGrid}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Image ${index + 1}`}
          className={css.gridImage}
        />
      ))}
    </div>
  );
}

export default ImageGrid;
