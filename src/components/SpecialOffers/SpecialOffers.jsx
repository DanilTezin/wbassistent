import styles from "./SpecialOffers.module.css";
import { specialOffersData } from "../../services/constants";
import SpecialOfferCards from "../SpecialOfferCards/SpecialOfferCards";

function SpecialOffers() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Наши акции</h2>
      <div className={styles.cardsContainer}>
        {specialOffersData.map((el) => {
          return <SpecialOfferCards key={el.index} data={el}/>;
        })}
      </div>
    </div>
  );
}

export default SpecialOffers;
