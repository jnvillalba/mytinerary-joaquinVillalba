import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/citiesActions";
const initialState = {
  cities: [
    {
      id: 1,
      name: "City 1",
    },
  ],
};

const citiesReducer = createReducer(initialState, (builder) => {
  return builder.addCase(citiesActions.get_cities.fulfilled, (state, action) => {
    const newState = { ...state, cities: action.payload.cities };
    return newState;
  });
});

export default citiesReducer;
