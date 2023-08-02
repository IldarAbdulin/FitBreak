import React from "react";
import styles from "./ButtonHero.module.scss";

export const Button = () => {
  return (
    <button className={styles.btn}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
        >
          <path
            d="M19.6663 33.8262L27.7663 17.6095H22.1663V7.15951L13.833 23.3762H19.6663V33.8262ZM20.4997 3.82617C25.083 3.82617 28.9997 5.49284 32.2497 8.74284C35.4997 11.9928 37.1663 15.9095 37.1663 20.4928C37.1663 25.0762 35.4997 28.9928 32.2497 32.2428C28.9997 35.4928 25.083 37.1595 20.4997 37.1595C15.9163 37.1595 11.9997 35.4928 8.74967 32.2428C5.49967 28.9928 3.83301 25.0762 3.83301 20.4928C3.83301 15.9095 5.49967 11.9928 8.74967 8.74284C11.9997 5.49284 15.9163 3.82617 20.4997 3.82617Z"
            fill="white"
          />
        </svg>
      </div>
      Начать разминку
    </button>
  );
};
