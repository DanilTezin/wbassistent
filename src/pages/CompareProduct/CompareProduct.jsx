import React from "react";
import Styles from "./CompareProduct.module.css";
export const CompareProduct = () => {
  return (
    <div className={Styles.compareProduct}>
      <h1>
        Сравнение <span className={Styles.compareProductSpan}>товаров</span>
      </h1>
    </div>
  );
};
