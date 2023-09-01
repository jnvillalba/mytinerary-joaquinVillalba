import { createReducer } from "@reduxjs/toolkit";
import itinerariesActions from "../actions/ItinerariesActions";
const initialState = {
  itineraries: [],
};

const itinerariesReducer = createReducer(initialState, (builder) => {
  return builder.addCase(
    itinerariesActions.get_itineraries.fulfilled,
    (state, action) => {
      const newState = { ...state, itineraries: action.payload.itineraries };
      return newState;
    }
  );
});

export default itinerariesReducer;
