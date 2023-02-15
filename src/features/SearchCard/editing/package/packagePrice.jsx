import React from 'react';
import style from "./package.module.css";

export const PackagePrice = ({price, discount, setPrice, setDiscount}) => {
    return(
        <div className={style.packageSize}>
            <ul>
                Цены обновляются 5-10 минут
                <li>
                    <div className={style.discount}>{Math.floor(price - price / 100 * discount)}₽</div>
                </li>
            </ul>
            <ul>
                <li>Цена без скидки:</li>
                <input
                    placeholder="Введите значение"
                    type="number"
                    value={price | 0}
                    className={style.inputPrices}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </ul>
            <ul>
                <li>Скидка %:</li>
                {discount > -10 ? <input
                    placeholder="Введите значение"
                    type="number"
                    value={discount}
                    className={style.inputPrices}
                    onChange={(e) => setDiscount(e.target.value)}
                /> : null}
                <button className={style.removeDiscountButton} onClick={()=>setDiscount(0)}>Сбросить скидки</button>
            </ul>
        </div>
    )
}