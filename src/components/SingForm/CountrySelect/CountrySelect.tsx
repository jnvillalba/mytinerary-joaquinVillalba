import React from "react";
import { CountryDropdown } from "react-country-region-selector";

const CountrySelect = ({ formData, handleFormChange }) => {
  const handleCountryChange = (selectedCountry) => {
    handleFormChange("country", selectedCountry); 
  };

  return (
    <div className="form-inputs relative mb-5">
      <label className="bg-white text-gray-600">Country/Region</label>
      <CountryDropdown
        classes="country-dropdown"
        value={formData.country}
        onChange={handleCountryChange}
      />
    </div>
  );
};

export default CountrySelect;
