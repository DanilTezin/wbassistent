import styles from "./PriceCard.module.css";

function PriceCard({ data }) {

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.price}>
            <div className={styles.amount}>
              <span className={styles.currency}>₽</span>
              <span className={styles.totalPrice}>{data.price}</span>
            </div>
            <div className={styles.time}>в месяц</div>
          </div>
          <div className={`${styles.name} ${styles.level}`}>{data.level}</div>
        </div>
        <div className={styles.body}>
           <ul className={styles.bodyContainer}>
          {data.pros.map((item) => {
            return <li className={styles.pros}>{item}</li>;
          })}
        </ul>
        <div className={styles.button}>Купить сейчас</div>
        </div>
       
      </div>
    </div>
  );
}

export default PriceCard;
