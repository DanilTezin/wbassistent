import React from "react";
import Style from "../../components/App/App.module.css";
import telegram from '../../images/logos/telegram.svg'
export const Telegram = () => {
    return (
        <a target="_blank" href="https://t.me/helpreturns" className={Style.telegramFixed}>
            <img width="50" src={telegram} alt="telegram-bot" />
        </a>
    )
}