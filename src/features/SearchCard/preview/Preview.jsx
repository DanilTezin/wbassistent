import Style from "./Preview.module.css";
import React, { useEffect, useState } from "react";
import SubmitButton from "../../../components/SubmitButton/submit-button";
import {
  PreviewCard,
  PreviewSlider,
} from "./preview/preview";
import { ProductColors } from "./colors/colors";
import { SizeTable } from "./size/size";
import { Selling } from "./selling/selling";
import { OptionsTable } from "./options/options";
import { Description } from "./description/description";
import { useSelector } from "react-redux";

export const Preview = ({  setSwitch }) => {
  const item = useSelector((state) => state.searchCardReducer.card);
  const [currentMedia, setCurrentMedia] = useState(item.mediaFiles[0]);
  useEffect(() => {
    setCurrentMedia(item.mediaFiles[0])
  }, [item])
  const handleSwitch = () => {
    setSwitch((prev) => !prev);
  };

  return (
    <div className={Style.previewBox}>
      {item && (
        <div className={Style.cardHeader}>
          <div className={Style.cardText}>
            <h2 className={Style.mediaName}>{item.characteristics.map(x => (
                x.name &&
                x.name.includes('Наименование') && x.value
            ))}</h2>
          </div>
          <div className={Style.switchUpdateBtns}>
            <SubmitButton content="Редактирование" onClick={handleSwitch} />
          </div>
        </div>

      )}
      <div className={Style.currentMedia}>
        <PreviewSlider setCurrentMedia={setCurrentMedia}  />
        <PreviewCard currentMedia={currentMedia} />
        <div className={Style.currentInfo}>
          <ProductColors />
          <SizeTable  />
          <Selling />
        </div>
      </div>
      <div className={Style.currentData}>
        <OptionsTable />
        <Description />
      </div>
    </div>
  );
};
