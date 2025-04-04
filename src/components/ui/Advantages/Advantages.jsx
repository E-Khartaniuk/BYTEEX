import React from "react";
import css from "./Advantages.module.css";
import Truck from "../../../icons/Truck";
import Cart from "../../../icons/Cart";
import Shild from "../../../icons/Shild";

function Advantages() {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <div className={css.imgContainer}>
          <Truck color={"#676869"} width={24} height={16} />
        </div>
        <span className={css.text}>FREE Shipping on Orders over $200</span>
      </li>
      <li className={css.listItem}>
        <div className={css.imgContainer}>
          <Shild color={"#676869"} width={20} height={14} />
        </div>
        <span className={css.text}>FREE Shipping on Orders over $200</span>
      </li>
      <li className={css.listItem}>
        <div className={css.imgContainer}>
          <Cart color={"#676869"} width={20} height={20} />
        </div>
        <span className={css.text}>FREE Shipping on Orders over $200</span>
      </li>
    </ul>
  );
}

export default Advantages;
