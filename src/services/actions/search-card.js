import { fetchProductCard } from "../../utils/fetches";

import {
  FETCH_CARD_SUCCESS,
  FETCH_CARD_ERROR,
  FETCH_CARD_REQUEST,
} from "../../utils/constants/card-editor";

export function getCard(token, query) {
  return async function (dispatch) {
    dispatch({ type: FETCH_CARD_REQUEST });
    await fetchProductCard(token, query)
      .then((res) => {
        dispatch({
          type: FETCH_CARD_SUCCESS,
          payload: res.data,
        });
        if (res.status == '204') {
          dispatch({ type: FETCH_CARD_ERROR, payload: "Артикул не найден" });
        }
      })
      .catch((err) => {
        dispatch({ type: FETCH_CARD_ERROR, payload: err.response.data.text });
      });
  };
}
