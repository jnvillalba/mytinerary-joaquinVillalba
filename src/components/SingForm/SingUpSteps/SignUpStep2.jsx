import React from "react";
import { Link } from "react-router-dom";
import CountrySelect from "../CountrySelect/CountrySelect";

const SignUpStep2 = ({ handleRegister, formData, handleFormChange }) => {
  return (
    <>
      <div className="right-side-top">
        <div className="step-text">step 2 of 2</div>
        <h6 className="create-account">Create account</h6>
      </div>
      <div className="right-side-bottom">
        <div className="right-side-text">
          <h6>Sign up with email</h6>
          <p>
            Already have an account?{""}
            <Link to="/sign-in" className="sign-in">
              Sign in
            </Link>
          </p>
        </div>

        <div className="right-side-form pb-16">
          <div className="right-side-form-step2">
            <div className="form-inputs relative mb-5">
              <label className="bg-white text-gray-600">First Name</label>
              <input
                id="firstNameInput"
                type="text"
                className="w-full px-2 py-2 border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
                value={formData.name}
                onChange={(e) => handleFormChange("name", e.target.value)}
              />
            </div>

            <div className="form-inputs relative mb-5">
              <label className="bg-white text-gray-600">Last Name</label>
              <input
                id="lastNameInput"
                type="text"
                className="px-1 py-2 w-full border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
                value={formData.lastName}
                onChange={(e) => handleFormChange("lastName", e.target.value)}
              />
            </div>
          </div>

          <div className="form-inputs relative mb-5">
            <label className="bg-white text-gray-600">Photo</label>
            <input
              id="photoInput"
              type="text"
              className="px-1 py-2 w-full border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
              value={formData.photo}
              onChange={(e) => handleFormChange("photo", e.target.value)}
            />
          </div>

          <CountrySelect formData={formData}
          handleFormChange={handleFormChange}/>

          <div className="submit-button pt-8 flex justify-end">
            <Link to="/sign-in">
              <input
                type="submit"
                className="btn-prima submit-button-input"
                onClick={() => handleRegister()}
                value={"Create Account"}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpStep2;
