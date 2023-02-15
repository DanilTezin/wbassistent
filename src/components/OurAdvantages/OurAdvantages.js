import Styles from "./OurAdvantages.module.css";

function OurAdvantages() {
  return (
    <section className={Styles.section}>
      <h2 className={Styles.title}>Главные наши возможности:</h2>
      <p className={Styles.content}>
        Мы - официальный авторизованный партнер Wildberries. Информация о нас
        размещена в личном кабинете каждого поставщика Wildberries. Подробнее:{" "}
        <a className={Styles.link} rel="noreferrer" target='_blank' href="https://seller.wildberries.ru/marketplace-partners">
          https://seller.wildberries.ru/marketplace-partners
        </a>
      </p>
    </section>
  );
}

export default OurAdvantages;
