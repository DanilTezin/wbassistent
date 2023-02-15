import {
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_ERROR,
  DELETE_USER_DATA,
} from "../../utils/constants/user-data";

const initialState = {
  isLoading: false,
  hasError: false,
  userInfo: null
};

export const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
        userInfo: initialState.userInfo,
      };
    }

    case FETCH_USER_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        userInfo: action.payload
      };
    }
    case FETCH_USER_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        userInfo: initialState.userInfo,
      };
    }

    case DELETE_USER_DATA: {
      return {
        ...state,
        userInfo: initialState.userInfo,
      };
    }
    default:
      return state;
  }
};
