import { createAsyncThunk } from "@reduxjs/toolkit";
import { getItinerariesByCity } from "../../services/ItineraryQueries";

const get_itineraries = createAsyncThunk("get_itineraries", async (cityId) => {
  const itineraries = await getItinerariesByCity(cityId);

  return {
    itineraries: itineraries,
  };
});

const itinerariesActions = {
  get_itineraries,
};
export default itinerariesActions;
