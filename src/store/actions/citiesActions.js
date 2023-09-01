import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_cities = createAsyncThunk("get_cities", async () => {
  const cities = await axios
    .get("http://localhost:3000/api/cities")
    .then((response) => {
      return response.data.cities;
    });

  return {
    cities: cities,
  };
});

const citiesActions = {
  get_cities,
};
export default citiesActions;
