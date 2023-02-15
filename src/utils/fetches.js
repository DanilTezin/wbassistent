import { baseUrl, checkResponse } from "./constants/api-constants";
import { getCookie } from "./cookie";
import axios from "axios";

export const fetchRegister = (form) => {
    const requestOptions = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(form),
    };
    return fetch(`${process.env.REACT_APP_BASE_API_URL}/register/`, requestOptions).then(checkResponse);
}
export const fetchLogin = (form) => {
    const requestOptions = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "follow",
        referrerPolicy: "no-referrer",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
    };

    return fetch(`${process.env.REACT_APP_BASE_API_URL}/login/`, requestOptions).then(checkResponse);
};

export const fetchUserData = () => {
    const requestOptions = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "follow",
        referrerPolicy: "no-referrer",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getCookie("token")}`
        },
        body: JSON.stringify({ access: getCookie("token") }),
    };

    return fetch(`${process.env.REACT_APP_BASE_API_URL}/token/get_data/`, requestOptions).then(
        checkResponse
    );
};



export const fetchAPIKeys = (form) => {

    const requestOptions = {
        method: "PATCH",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "follow",
        referrerPolicy: "no-referrer",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getCookie("token")}`
        },
        body: JSON.stringify({
            token: form.token,
            token_statistics: form.token_statistics
        }),
    };

    const market_id = getCookie("market_id");

    return fetch(`${process.env.REACT_APP_BASE_API_URL}/api/market/${market_id}/`, requestOptions).then(
        checkResponse
    );
};

export const fetchProductCard = (token, query) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    return axios(`${process.env.REACT_APP_BASE_API_URL}/cards/user/${query}`, requestOptions)
}