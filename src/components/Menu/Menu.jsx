import Style from "./Menu.module.css";

function Menu() {
  return (
    <div className={Style.container}>
      <div>
        <div className={`${Style.group}`}>
          <p className={`${Style.title}`}>Управление товарами</p>
          <ul className={`${Style.list}`}>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/search-card">
                Изменить данные одного товара
              </a>
            </li>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                Контроль работы с карточкой
              </a>
            </li>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                Выгрузить все данные товаров
              </a>
            </li>
          </ul>
        </div>
        <div className={`${Style.group}`}>
          <p className={`${Style.title}`}>Работа с клиентами</p>
          <ul className={`${Style.list}`}>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                Автоответы на отзывы
              </a>
            </li>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                Работа с вопросами
              </a>
            </li>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/returns">
                Контроль возвратов FBS
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className={`${Style.group}`}>
          <h3 className={`${Style.title}`}>Любые отчеты</h3>
          <ul className={`${Style.list}`}>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                Получить габариты товаров
              </a>
            </li>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                Статистика продаж
              </a>
            </li>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                Выгрузка заказов
              </a>
            </li>
          </ul>
        </div>
        <div className={`${Style.group}`}>
          <h3 className={`${Style.title}`}>Рост продаж</h3>
          <ul className={`${Style.list}`}>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                Все товары без продаж
              </a>
            </li>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                Рост продаж по артикулу
              </a>
            </li>
            <li className={`${Style.listItem}`}>
            <a className={`${Style.link}`} href="/compare">
                Сравнить себя с конкурентами
              </a>
            </li>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                География продаж
              </a>
            </li>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                Видимость товара
              </a>
            </li>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                Подбор ключевых слов
              </a>
            </li>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                Проверка карточки SEO
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className={`${Style.group}`}>
          <h3 className={`${Style.title}`}>Работа с поставками</h3>
          <ul className={`${Style.list}`}>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                Поиск поставки по ШК
              </a>
            </li>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                План поставок (автозаказы)
              </a>
            </li>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                Контроль остатков
              </a>
            </li>
            <li className={`${Style.listItem}`}>Массовое обсудение остатков</li>
          </ul>
        </div>
        <div className={`${Style.group}`}>
          <h3 className={`${Style.title}`}>Финансы маркетплейса</h3>
          <ul className={`${Style.list}`}>
            <li className={`${Style.listItem}`}>
              <a className={`${Style.link}`} href="/#">
                Расшифровка отчета детализации
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
