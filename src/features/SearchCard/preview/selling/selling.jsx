import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Style from './selling.module.css'

export const Selling = () => {
  const item = useSelector((state) => state.searchCardReducer.card);
  return (
    <>
      {item.brand && (
        <div className={Style.sellingBlock}>{item.brand}</div>
      )}
    </>
  );
};

















