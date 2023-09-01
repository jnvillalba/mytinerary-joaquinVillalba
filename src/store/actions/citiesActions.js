import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCities } from "../../services/cityQueries";

const get_cities = createAsyncThunk("get_cities", async (queryParams = "") => {
  const cities = await getAllCities(queryParams);
    

  return {
    cities: cities,
  };
});



const citiesActions = {
  get_cities,
};
export default citiesActions;
