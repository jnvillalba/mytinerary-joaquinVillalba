import React, { useEffect, useRef } from "react";
import City from "./City";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../../store/actions/citiesActions";
const Cities = () => {
  const dispatch = useDispatch();
  const citiesData = useSelector((store) => store.citiesReducer.cities);
  const input = useRef(null); 
  
  useEffect(() => {
    dispatch(citiesActions.get_cities())
      .unwrap()
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = input.current.value.trim();

    if (searchText) {
      dispatch(citiesActions.get_cities(`?search=${searchText}`));
    } else{
      dispatch(citiesActions.get_cities())
      .unwrap()
      .catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center ">
        <img
          width={308}
          height={200}
          src="/bg-1.jpeg"
          alt="Banner"
          className=""
        />
        <div className="text-white text-4xl md:text-5xl font-bold py-4 md:py-6">
          Cities
        </div>
        <div className="text-white text-xl md:text-3xl font-semibold p-4">
          Collection of the most beautiful places and experiences
        </div>
      </div>
      <div className="bg-gray-200 w-full">
        <form
          className="rounded-lg flex flex-col md:flex-row justify-center p-4 md:p-10 md:mx-64 gap-4 lg:px-12 xl:px-20 gap-1"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search your city"
            className="text-zinc-900 text-opacity-60 text-xl md:text-lg font-normal p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500 flex-grow"
            ref={input}
          />
          <button className="bg-indigo-600 text-white text-base md:text-sm font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">
            Search
          </button>
        </form>

        <div className="flex flex-wrap justify-center p-4 md:p-10 gap-8">
          {citiesData.length > 0 ? (
            citiesData.map((city, index) => <City key={index} city={city} />)
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    No matches found
  </h2>
  <p className="text-gray-600">
    Sorry, we couldn't find any matches for your search. Please try again with different search criteria.
  </p>
</div>

          )}
        </div>
      </div>
    </div>
  );
};

export default Cities;
