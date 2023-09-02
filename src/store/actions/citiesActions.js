import { createAsyncThunk,createAction } from "@reduxjs/toolkit";
import { getAllCities } from "../../services/cityQueries";

const get_cities = createAsyncThunk("get_cities", async (queryParams = "") => {
  const cities = await getAllCities(queryParams);
  return {
    cities: cities,
  };
});

const set_cities = createAction("set_cities");



const citiesActions = {
  get_cities,
  set_cities
};
export default citiesActions;
