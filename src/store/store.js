import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers";
import itinerariesReducer from "./reducers/itinerariesReducers";
export const store = configureStore({
  reducer: {
    citiesReducer: citiesReducer,
    itinerariesReducer: itinerariesReducer
  },
});
