import { FunctionalCardsData } from "../../utils/constants/functionalCardsData";
import FunctionalCard from "../FunctionalCard/FunctionalCard";
import Styles from "./FunctionalCardsList.module.css";

function FunctionalCardsList() {
  return (
    <section className={Styles.section}>
      <h2 className={Styles.title}>Воспользуйтесь другими нашими функциями:</h2>
      <ul className={Styles.cardsList}>
        {FunctionalCardsData.map((el, index) => {
          return <FunctionalCard data={el} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default FunctionalCardsList;
