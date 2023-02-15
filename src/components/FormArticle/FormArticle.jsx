import React from "react";
import SubmitButton from "../SubmitButton/submit-button";
import Style from "./FormArticle.module.css";
export const FormArticle = ({ onSubmit, onChange, placeholder }) => {
  let keyDown = (event) => {
    if (
      event.keyCode == 46 ||
      event.keyCode == 8 ||
      event.keyCode == 9 ||
      event.keyCode == 27 ||
      (event.keyCode == 65 && event.ctrlKey === true) ||
      (event.keyCode == 86 && event.ctrlKey === true) ||
      (event.keyCode == 67 && event.ctrlKey === true) ||
      (event.keyCode >= 35 && event.keyCode <= 39)
    ) {
      return;
    } else {
      if (
        (event.keyCode < 48 || event.keyCode > 57) &&
        (event.keyCode < 96 || event.keyCode > 105)
      ) {
        event.preventDefault();
      }
    }
  };

  return (
    <div className={Style.formArticle}>
      <form action="article" onSubmit={onSubmit}>
        <label>
        <img
            src="/static/media/magnifying-glass.885f7f251805cfdd6f7a3145a0664af5.svg"
            alt="Лупа"
          />
          <input
            onKeyDown={keyDown}
            placeholder={placeholder}
            className={Style.inputArticle}
            type="text"
            onChange={onChange}
          />
         
        </label>
        <SubmitButton content="Поиск" />
      </form>
    </div>
  );
};
