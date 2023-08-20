import React, { useEffect, useState } from "react";
import Main from "../layouts/Main";
import { useParams } from "react-router-dom";
import { getCity } from "../services/cityQueries";
import CityDetails from "../components/Cities/CityDetails";

const CityDetailsPage = () => {
  const [city, setCity] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getCity(id)
      .then((data) => {
        console.log(data);
        setCity(data);
        console.log(city.image)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  return (
    <Main background={city.image}>
      <CityDetails city={city} />
    </Main>
  );
};

export default CityDetailsPage;
