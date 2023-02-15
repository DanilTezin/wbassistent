import { fetchAPIKeys } from "../../utils/fetches";
import {
    FETCH_API_KEYS_ERROR,
    FETCH_API_KEYS_REQUEST,
    FETCH_API_KEYS_SUCCESS
} from "../../utils/constants/API_keys";

// запись API ключей в БД
export function patchKeys(form) {
    return function (dispatch) {
        dispatch({ type: FETCH_API_KEYS_REQUEST });
        fetchAPIKeys(form)
            .then((res) => {
                if (res) {
                    dispatch({ type: FETCH_API_KEYS_SUCCESS });
                    
                } else {
                    dispatch({ type: FETCH_API_KEYS_ERROR });
                   
                }
            })
            .catch(() =>
                dispatch({
                    type: FETCH_API_KEYS_ERROR,
                })
            );
    };
}