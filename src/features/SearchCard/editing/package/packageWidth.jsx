import React from 'react';
import Style from "./package.module.css";
export const PackageWidth = ({itemOptions, otherItemOptions, findChange, findOtherChange}) => {
 
    return(
        <>
         {(itemOptions &&
          itemOptions.some(
            (x) =>  x.name.includes("Вес")
          ) ||
          otherItemOptions &&
            otherItemOptions.some(
              (x) =>  x.name.includes("Вес")
            )) && (
              <div className={Style.packageSize}>
                <h4>Вес:</h4>
                {itemOptions  &&
                  itemOptions.map(
                    (x, i) =>
                      (x.name && x.name.includes("Вес")) && ((
                        <ul key={x.name}>
                          <li>{x.name}</li>
                          <input
                            data-name={x.name}
                            placeholder=""
                            type="number"
                            value={x.value}
                            onChange={(e) => findChange(e)}
                          />
                        </ul>
                      ))
                  )}
                {otherItemOptions  &&
                  otherItemOptions.map(
                    (x, i) =>
                      (x.name && x.name.includes("Вес")) && ((
                        <ul key={x.name}>
                          <li>{x.name}</li>
                          <input
                            data-name={x.name}
                            placeholder=""
                            type="number"
                            value={x.value}
                            onChange={(e) => findOtherChange(e)}
                          />
                        </ul>
                      ))
                  )}
              </div>
            )}
        </>
    )
}