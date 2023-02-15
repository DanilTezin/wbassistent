import style from './returnControl.module.css'
import { useState } from 'react';
import { getCookie } from '../../utils/cookie';
import reloadCirce from '../../images/icons/reload-circle.svg'
import { useEffect } from 'react';
import { Link, Redirect, useLocation } from "react-router-dom";


export const ReturnControlPage = () => {
    let token = getCookie('token')

    const [data, setData] = useState([])
    const [visibleBtn, setVisibleDelBtn] = useState(true)
    const [persent, setPersent] = useState(0)
    const [sum, setSum] = useState(0)
    const location = useLocation();


    useEffect(()=>{
        if(!token){
            <Redirect to="/login"/>
        }
    })

    const returnHandle = () => {
        fetch(`${process.env.REACT_APP_BASE_API_URL}/statistic/user/returns/`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response)
                setData(response.data)
                setPersent(response.canceled_percent)
                setSum(response.canceled_sum)
                setVisibleDelBtn(false)
            })
    }

    return (
        <div className={style.wrap}>
             {token ? null : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location },
                    }}
                />}
            <div className={style.blockInfo}>
                <div className={style.combineBtn}>
                    <div className={style.wrapInfo}>
                        <h5>Оформление возврата проходит через клиентский сайт Wildberries.ru</h5>
                        <h5>Для оформления возврата необходимо:</h5>
                        <ol>
                            <li>Нажать кнопку – Активировать (Активация кнопки доступна только главному пользователю Аккаунта).</li>
                            <li>Перейти на клиентский сайт Wildberries.ru с того номера телефона, с которого была выполнена активация.</li>
                            <li>На клиентском сайте положить в корзину свой товар.</li>
                            <li>При выборе типа оплаты выбрать – "Возврат товара".</li>
                            <li>Далее продолжить оформление с учетом ваших предпочтений и объема груза Пвз\Курьер.</li>
                            <li>Получение возврата происходит по коду получения или Qr коду из личного кабинета клиента.</li>
                        </ol>
                    </div>
                    <div className={style.combineReturn}>
                        <div className={style.returnBlock}>
                            {visibleBtn && <button className={style.returnButton} onClick={returnHandle}>Получить возвраты</button>}
                        </div>
                        <div className={style.wrapReturnTitle}>
                            <a target='_blank' href="https://seller.wildberries.ru/login/ru?redirect_url=/goods-return/registration-return" rel="noreferrer">
                                <label class={style.switch}>
                                    <span class={style.slider}></span>
                                </label>
                            </a>
                            <p>Активировать оформление возврата</p>

                        </div>
                    </div>
                </div>
                <div className={style.wrapInfo}>
                    <h5>Условия оформления:</h5>
                    <ol>
                        <li>Активация возврата работает на 1 заказ из корзины, при необходимости оформить дополнительный товар на возврат – необходимо проделать процедуру активации повторно.</li>
                        <li> Стоимость услуги рассчитывается для каждой единицы товара:
                            - Доставка на пвз - Базовая стоимость логистики предмета + 80 рублей
                            - Доставка курьером - Базовая стоимость логистики предмета + 170 рублей</li>
                        <li>Общая сумма оказанной услуги по каждой единицы товара будет отражена и удержана логистикой в еженедельном отчете.</li>
                        <li>На 1 пвз можно заказывать не более 3 кубометров своего товара. При выявлении случаев нарушения данного пункта товар будет возвращен обратно на склад, стоимость услуги будет удержана в полном объеме.</li>
                        <li>Далее продолжить оформление с учетом ваших предпочтений и объема груза Пвз\Курьер.</li>
                        <li>Получение возврата происходит по коду получения или Qr коду из личного кабинета клиента.</li>
                    </ol>
                    <h5>Если Активация была выполнена ошибочно - необходимо <br /> перевести кнопку «Активировать оформление возврата» в неактивное положение.</h5>
                </div>
                <h4>
                    Рекомендуем вернуть товар для новой предпродажной подготовки. <br />
                    Товары доступные новым покупателям без проверки
                </h4>
            </div>
            <div className={style.dataBlock}>
                {data[0] &&
                    <table className={style.dataTable}>

                        <td>Изображение</td>
                        <td>Артикул WB</td>
                        <td>Бренд</td>
                        <td>Наименование</td>
                        <td>Артикул</td>
                        <td>Область заказа</td>
                        <td>Склад возврата</td>
                        <td>Дата отмены заказа</td>
                        <td>Сделать возврат</td>

                        {data.map((item) => {
                            let link = `https://www.wildberries.ru/catalog/${item.nmId}/detail.aspx`
                            let date = new Date(item.cancel_dt)
                            return <tr key={item.id}>
                                <td><img width={50} src={item.image} alt="" /></td>
                                <td><div>{item.nmId}</div></td>
                                <td>{item.brand}</td>
                                <td>{item.subject}</td>
                                <td>{item.supplierArticle}</td>
                                <td>{item.oblast}</td>
                                <td>{item.warehouseName}</td>
                                <td>{date.toLocaleDateString()}</td>
                                <td>
                                    <a className={style.refresh} target='_blank' href={link} rel="noreferrer">
                                        <img width={40} src={reloadCirce} alt="" />
                                    </a>
                                </td>

                            </tr>
                        })}
                    </table>}
                    <div className={style.sum_persent}>
                        <h4>Сумма возвратов за месяц: {new Intl.NumberFormat('ru-RU').format(sum)}&#8381;</h4>
                        <h4>Процент возвратов за месяц: {persent}%</h4>
                    </div>
              
            </div>
        </div>
    )
}