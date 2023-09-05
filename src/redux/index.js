import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userInfo from "./userInfo";

const rootReducer = combineReducers({
  userInfo: userInfo,
});

export const store = configureStore({
  reducer: rootReducer,
});
