import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers";
export const store = configureStore({
  reducer: {
    citiesReducer: citiesReducer
  },
});
