import {
    FETCH_API_KEYS_REQUEST,
    FETCH_API_KEYS_SUCCESS,
    FETCH_API_KEYS_ERROR
} from "../../utils/constants/API_keys";

const initialState = {
    isLoading: false,
    hasError: false,
};

export const APIKeysReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_API_KEYS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                hasError: false,
            };
        }
        case FETCH_API_KEYS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hasError: false,
            };
        }

        case FETCH_API_KEYS_ERROR: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };
        }

        default:
            return state;
    }
};
