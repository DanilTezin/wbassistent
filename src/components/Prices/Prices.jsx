import { pricesData } from "../../services/constants";
import PriceCard from "../PriceCard/PriceCard";
import styles from "./Prices.module.css";

function Prices() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Наши тарифы</h2>
      <div className={styles.cardsContainer}>
        {pricesData.map((el) => {
          return <PriceCard data={el} key={el.index} />;
        })}
      </div>
    </div>
  );
}

export default Prices;
