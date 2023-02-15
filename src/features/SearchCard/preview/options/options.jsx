import { useState } from "react";
import { useSelector } from "react-redux";
import Style from "../options/options.module.css";

export const OptionsTable = () => {
  const item = useSelector((state) => state.searchCardReducer.card);

  return (
    <div>
      {item.characteristics ? (
        <div className={Style.currentDataInfo}>
          <h3>О товаре</h3>
          <table className={Style.currentDataOptions}>
            {item &&
              item.characteristics.map(
                (group) =>
                  group.name.indexOf("Наименование") == -1 &&
                  group.name.indexOf("Описание") == -1 && (
                          <tr>
                            <td className={Style.cardInfoTableKeys}>
                              <span>{group.name}</span>
                            </td>
                            <td className={Style.cardInfoTableValues}>
                              <span>{group.value}</span>
                            </td>
                          </tr>
                  )
              )}
          </table>
        </div>
      ) : (
        <div className={Style.currentDataInfo}>
          Характеристики отсутствуют. <br /> Рекомендуем добавть, чтобы повысить
          продвигаемость товара
        </div>
      )}
    </div>
  );
};
