import styles from "./SpecialOfferCards.module.css";
import { ReactComponent as ArrowRightComponent } from "../../images/logos/arrow-right.svg";

function SpecialOfferCards({ data }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <img className={styles.logo} src={data.image} alt={data.image} />
        <p className={styles.title}>{data.offerTitle}</p>
        <p className={styles.content}>{data.offerContent}</p>
        <a className={styles.link} href="./#">
          <span className={styles.text}>Узнать больше</span>
          <ArrowRightComponent />
        </a>
      </div>
    </div>
  );
}

export default SpecialOfferCards;
