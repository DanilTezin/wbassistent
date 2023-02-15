import { useSelector } from 'react-redux';
import Style from '../colors/colors.module.css'

export const ProductColors = () => {
  const item = useSelector((state) => state.searchCardReducer.card);
    return (
      <>
        {item.colors && item.colors.length > 0 && (
          <div className={Style.productColors}>
            <span>Цвет: </span><span style={{fontWeight: 600}}>{item.colors.map((x) => x)}</span>
          </div>
        )}
      </>
    );
  };