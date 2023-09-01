import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import itinerariesActions from "../../store/actions/itinerariesActions";
import Itinerary from "./Itinerary";
import NoItineraries from "./NoItineraries";

const Itineraries = () => {
  const dispatch = useDispatch();
  const itinerariesData = useSelector(
    (store) => store.itinerariesReducer.itineraries
  );

  const  cityId  = useParams();
  useEffect(() => {
    dispatch(itinerariesActions.get_itineraries(cityId.id))
      .unwrap()
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, cityId]);
  return (
    <div>
      {itinerariesData.length === 0 ? (
       <NoItineraries/>
      ) : (
        itinerariesData.map((itinerary, index) => (
          <Itinerary key={index} itinerary={itinerary} />
        ))
      )}
    </div>
  );
};

export default Itineraries;
