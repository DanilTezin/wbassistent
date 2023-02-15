import { useSelector } from 'react-redux';
import Style from '../size/size.module.css'

export const SizeTable = () => {
  const item = useSelector((state) => state.searchCardReducer.card);
    return (
      <>
        {item.sizes && (
          <>
            <div className={Style.infoSizeTable}>Таблица размеров</div>
            <div className={Style.infoSize}>
              {item.sizes.sort((a,b) => a.techSize - b.techSize).map((x) => (
                <div key={x.techSize}>{x.techSize}</div>
              ))}
            </div>
          </>
        )}
      </>
    );
  };