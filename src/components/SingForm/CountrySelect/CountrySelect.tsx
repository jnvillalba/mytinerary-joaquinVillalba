import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const CountrySelect = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    setRegion("");
  };

  const handleRegionChange = (selectedRegion) => {
    setRegion(selectedRegion);
  };

  return (
    <div className="form-inputs relative mb-5">
      <label className="bg-white text-gray-600">Country/Region</label>
      <CountryDropdown
        classes="country-dropdown"
        value={country}
        onChange={handleCountryChange}
      />
      <RegionDropdown
      disableWhenEmpty={true}
        classes="region-dropdown"
        country={country}
        value={region}
        onChange={handleRegionChange}
      />
    </div>
  );
};

export default CountrySelect;
