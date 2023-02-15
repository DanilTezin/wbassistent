import styles from "./SearchField.module.css";
import MagnifyingGlass from "../../images/logos/magnifying-glass.svg";
import SubmitButton from "../SubmitButton/submit-button";

function SearchField() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Поиск товара <span className={styles.span}>по артикулу</span>
      </h1>
      <form className={styles.form} action="submit">
        <label className={styles.label}>
          <img className={styles.logo} src={MagnifyingGlass} alt="Лупа" />
          <input
            className={styles.input}
            type="text"
            placeholder="Введите артикул товара"
          />
        </label>
        <SubmitButton content="Проверить" />
      </form>
    </div>
  );
}

export default SearchField;
