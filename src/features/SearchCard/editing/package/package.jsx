import Style from "./package.module.css";

//import { useSelector } from "react-redux";
import { Colors } from "../colors/Colors";
import { UploadFile } from "../upload-file/UploadFile";
import { PackageSize } from "./packageSize";
import { PackageWidth } from "./packageWidth";
import { PackageInfo } from "./packageInfo";
import {PackagePrice} from "./packagePrice";
import {PackageStocks} from "./packageStocks";
export const Package = ({
  findOtherChange,
  findChange,
  otherItemOptions,
  itemOptions,
  colors,
  setColors,
  token,
  newFiles,
  setNewFiles,
  files,
  setFiles,
  price,
  discount,
  setPrice,
  setDiscount,
  stocks,
  setStocks
}) => {
  //const item = useSelector((state) => state.searchCardReducer.card);

  return (
    <div className={Style.package}>
      <div className={Style.leftPackageBlock}>
       <PackagePrice
           setPrice={setPrice}
           setDiscount={setDiscount}
           price={price}
           discount={discount}
       />
          <PackageStocks
              setStocks={setStocks}
              stocks={stocks}
          />
       <PackageSize
       itemOptions={itemOptions}
       findChange={findChange}
       otherItemOptions={otherItemOptions}
       findOtherChange={findOtherChange}
       />
      <PackageWidth 
       itemOptions={itemOptions}
       findChange={findChange}
       otherItemOptions={otherItemOptions}
       findOtherChange={findOtherChange}
      />
      <Colors colors={colors} setColors={setColors} />
      </div>
      
        <div className={Style.rightBlock}>
          <PackageInfo 
          token={token}
          itemOptions={itemOptions}
          findChange={findChange}
          otherItemOptions={otherItemOptions}
          findOtherChange={findOtherChange}
          />
          <UploadFile
            token={token}
            newFiles={newFiles}
            setNewFiles={setNewFiles}
            files={files}
            setFiles={setFiles}
          />
        </div>
      
    </div>
  );
};
