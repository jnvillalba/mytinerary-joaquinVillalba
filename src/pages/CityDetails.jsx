import React, { useEffect, useState } from "react";
import Main from "../layouts/Main";
import { useParams } from "react-router-dom";
import { getCity } from "../services/cityQueries";

const CityDetails = () => {
  const [city, setCity] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getCity(id)
      .then((data) => {
        console.log(data);
        setCity(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  return (
    <Main background={city.image}>
      <h1>{city.name}</h1>
    </Main>
  );
};

export default CityDetails;
