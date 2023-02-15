import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { mainReducer } from "../services/reducers/mainReducer.jsx";
import { authReducer } from "./reducers/auth.jsx";
import { userDataReducer } from "./reducers/userData.js";

import { searchCardReducer } from "./reducers/cardEditor.jsx";

import {APIKeysReducer} from "./reducers/API_keys";


const rootReducer = combineReducers({
  mainReducer: mainReducer,
  authReducer: authReducer,
  userDataReducer: userDataReducer,
  searchCardReducer: searchCardReducer,

  APIKeysReducer: APIKeysReducer

});

const state = {};
export const store = configureStore({
  reducer: rootReducer,
  state,
  devTools: true,
});
