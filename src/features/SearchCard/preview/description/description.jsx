import { useState } from "react";
import { useSelector } from "react-redux";
import Style from "../description/description.module.css";

export const Description = () => {
  const item = useSelector((state) => state.searchCardReducer.card);

  return (
    <>
      <div className={Style.currentDataDesc}>
        <div>
          {item.characteristics &&
            item.characteristics.map(
              (x) =>
                x.name === "Описание" &&
                  (
                  <div key={x.name}>
                    <h3>{x.name}</h3>
                    <p>{x.value}</p>
                  </div>
                ) 
            )}
        </div>
      </div>
    </>
  );
};
