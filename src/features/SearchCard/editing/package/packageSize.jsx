import React from 'react';
import Style from "./package.module.css";

export const PackageSize = ({ itemOptions, otherItemOptions, findChange, findOtherChange}) => {

    return(
        <div className={Style.packageSize}>
        <h4>Упаковка:</h4>
        {itemOptions !== undefined &&
          itemOptions.map(
            (x, i) =>
              x.name &&
              x.name.includes("упаковки") &&
              !x.name.includes("Вес") && (
                <ul key={x.name}>
                  <li>
                    {x.name}, см <b>*</b>
                  </li>
                  <input
                    data-name={x.name}
                    placeholder="см"
                    type="number"
                    value={x.value}
                    onChange={(e) => findChange(e)}
                  />
                </ul>
              )
          )}
        {otherItemOptions !== undefined &&
          otherItemOptions.map(
            (x, i) =>
              x.name &&
              x.name.includes("упаковки") &&
              !x.name.includes("Вес") && (
                <ul key={x.name}>
                  <li>
                    {x.name}, см <b>*</b>
                  </li>
                  <input
                    data-name={x.name}
                    placeholder="см"
                    type="number"
                    value={x.value}
                    onChange={(e) => findOtherChange(e)}
                  />
                </ul>
              )
          )}
      </div>
    )
}