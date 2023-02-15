import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Style from "./Editing.module.css";
import SubmitButton from "../../../components/SubmitButton/submit-button";
import { Characteristics } from "./characteristics/characteristics";
import { Package } from "./package/package";
import { useSelector, useDispatch } from "react-redux";
import { getCard } from "../../../services/actions/search-card";
import * as _ from "lodash-es";

export const Editing = ({
  setSwitch,
  token,
  otherItemOptions,
  setOtherItemOptions,
  vendor,
}) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.searchCardReducer.card);
  const [colors, setColors] = useState(item.colors);
  const [files, setFiles] = useState(item.mediaFiles);
  const [newFiles, setNewFiles] = useState([]);
  const [price, setPrice] = useState(item.price)
  const [discount, setDiscount] = useState(item.discount)
  const [stocks, setStocks] = useState(item.stocks)
  const [itemOptions, setItemOptions] = useState(item.characteristics);
  const [scrollY, setScrollY] = useState(0);
  const [btnTop, setBtnTop] = useState(false);

  const handleSwitch = () => {
    setSwitch((prev) => !prev);
  };

  function filterChar() {
    if (!otherItemOptions || !item) {
      return;
    }
    for (let i = 0; i < otherItemOptions.length; i++) {
      for (let k = 0; k < item.characteristics.length; k++) {
        if (otherItemOptions[i].name.includes(item.characteristics[k].name)) {
          let idx = otherItemOptions.findIndex(
            (el) => el.name == item.characteristics[k].name
          );
          setOtherItemOptions([
            ...otherItemOptions.slice(0, idx),
            ...otherItemOptions.slice(idx + 1),
          ]);
        }
      }
    }
  }

  useEffect(() => {
    filterChar();
    console.clear()
    console.dirxml(item)

  }, [item, otherItemOptions]);

  const findChange = (e) => {
    let targetName = e.target.dataset.name;
    let idx = itemOptions.findIndex((el) => el.name == targetName);
    setItemOptions([
      ...itemOptions.slice(0, idx),
      {
        name: targetName,
        value: isNaN(e.target.value)
          ? e.target.value
          : e.target.value && parseFloat(e.target.value),
      },
      ...itemOptions.slice(idx + 1),
    ]);
  };
  const findOtherChange = (e) => {
    let targetName = e.target.dataset.name;
    let idx = otherItemOptions.findIndex((el) => el.name == targetName);
    setOtherItemOptions([
      ...otherItemOptions.slice(0, idx),
      {
        name: targetName,
        value: isNaN(e.target.value)
          ? e.target.value
          : e.target.value && parseFloat(e.target.value),
      },
      ...otherItemOptions.slice(idx + 1),
    ]);
  };

  const submit = (e) => {

    fetch(`${process.env.REACT_APP_BASE_API_URL}/cards/user/${vendor}`, {
      method: "POST",

      headers: {
       "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...item,
        characteristics: [...itemOptions, ...otherItemOptions].filter(
          (x) => x.value !== ""
        ),
        mediaFiles: files,
        newMediaFiles: newFiles,
        colors: colors,
        newPrice: price,
        newStocks: stocks,
        newDiscount: discount
      }),
    }).then((res) => {
      console.log(stocks)
      dispatch(getCard(token, vendor));
      handleSwitch();
    });
  };

  function logit() {
    setScrollY(window.pageYOffset);
  }
  useEffect(() => {
    if (scrollY > 1300) {
      setBtnTop(true);
    } else {
      setBtnTop(false);
    }
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <div className={Style.cardEditingBox}>
      {btnTop && (
        <button className={Style.top}>Обновить</button>
        )}
      <div className={Style.cardHeader}>
        <div className={Style.cardText}>
          <h2 className={Style.mediaName}>{item.object}</h2>
        </div>
        <div className={Style.switchUpdateBtns}>
          <SubmitButton onClick={submit} content="Обновить" />
          <SubmitButton content="Просмотр" onClick={handleSwitch} />
        </div>
      </div>

      {otherItemOptions ? (
        <>
          <Package
            price={price}
            discount={discount}
            setPrice={setPrice}
            setDiscount={setDiscount}
            colors={colors}
            setColors={setColors}
            otherItemOptions={otherItemOptions}
            itemOptions={itemOptions}
            findOtherChange={findOtherChange}
            findChange={findChange}
            token={token}
            newFiles={newFiles}
            setNewFiles={setNewFiles}
            files={files}
            setFiles={setFiles}
            stocks={stocks}
            setStocks={setStocks}
          />
          <Characteristics
            otherItemOptions={otherItemOptions}
            itemOptions={itemOptions}
            findOtherChange={findOtherChange}
            findChange={findChange}
          />
        </>
      ) : (
        <div>
          <h2>Категория товара не найдена</h2>
        </div>
      )}
    </div>
  );
};
