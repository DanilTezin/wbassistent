import arrow from "../../images/logos/arrow.svg";
import Style from './arrow.module.css';
export const Arrow = ({ onClick }) => {
    
    return (
      <button onClick={onClick} className={Style.arrow}>
        <img src={arrow} alt="arrow" />
      </button>
    );
  };