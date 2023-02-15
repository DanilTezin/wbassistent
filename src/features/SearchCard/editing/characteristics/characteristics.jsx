import { useEffect, useState } from "react";
import Style from "./characteristics.module.css";
import index from "../../../../images/logos/index.png";
import { useSelector } from "react-redux";
export const Characteristics = ({
  findOtherChange,
  findChange,
  otherItemOptions,
  itemOptions,
}) => {
  const item = useSelector((state) => state.searchCardReducer.card);

  return (
    <div className={Style.charcType} id="top">
      <ul >
        {/* {item.brand && (
          <li>
            <img className={Style.index} src={index} alt="wbassistent" />
            <span>Бренд</span>
            <input
              data-name="Бренд"
              placeholder="Введите значение"
              type="text"
            />
          </li>
        )} */}
        {/* {item.colors && (
          <li>
            <img className={Style.index} src={index} alt="wbassistent" />
            <span>Цвет</span>
            <i>(перечислить через запятую)</i>
            <input
              data-name="Цвет"
              placeholder="Введите значение"
              type="text"
            />
          </li>
        )} */}
        {itemOptions &&
          itemOptions.map(
            (x, i) =>
              x.name &&
              x.name.indexOf("упаковки") == -1 &&
              x.name.indexOf("Наименование") == -1 &&
              x.name.indexOf("Описание") == -1 &&
              x.name.indexOf("Бренд") == -1 &&
              x.name.indexOf("Размер") == -1 &&
              x.name.indexOf("Рос. размер") == -1 &&
              x.name.indexOf("Цвет") == -1 &&
              x.name.indexOf("Вес") == -1 && 
              x.name.indexOf("вес") == -1 && (
                <li key={x.name}>
                  {
                    <>
                      <span>{x.name}</span>
                      <input
                        data-name={x.name}
                        placeholder="Введите значение"
                        type="text"
                        value={x.value}
                        onChange={(e) => findChange(e)}
                      />
                    </>
                  }
                </li>
              )
          )}
        {otherItemOptions &&
          otherItemOptions.map(
            (x, i) =>
              x.name &&
              x.name.indexOf("упаковки") == -1 &&
              x.name.indexOf("Наименование") == -1 &&
              x.name.indexOf("Описание") == -1 &&
              x.name.indexOf("Бренд") == -1 &&
              x.name.indexOf("Размер") == -1 &&
              x.name.indexOf("Рос. размер") == -1 &&
              x.name.indexOf("Цвет") == -1 &&
              x.name.indexOf("Вес") == -1 &&
              x.name.indexOf("вес") == -1 && (
                <li key={x.name}>
                  {
                    <>
                      <span>{x.name}</span>
                      <input
                        data-name={x.name}
                        placeholder="Введите значение"
                        type="text"
                        value={x.value}
                        onChange={(e) => findOtherChange(e)}
                      />
                    </>
                  }
                </li>
              )
          )}
      </ul>
    </div>
  );
};
