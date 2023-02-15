import {
  FETCH_CARD_SUCCESS,
  FETCH_CARD_REQUEST,
  FETCH_CARD_ERROR,
} from "../../utils/constants/card-editor";

const initialState = {
  card: null,
  isLoading: false,
  hasError: false,
  errMessage: null
};

export const searchCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        card: action.payload,
        errMessage: null
      };
    }
    case FETCH_CARD_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
        errMessage: null
      };
    }
    case FETCH_CARD_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errMessage: action.payload
      };
    }
    default:
      return state;
  }
};
