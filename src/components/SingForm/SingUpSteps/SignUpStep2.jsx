import React from "react";
import { Link } from "react-router-dom";
import CountrySelect from "../CountrySelect/CountrySelect";

const SignUpStep2 = ({ setCurrentStep, formData, handleFormChange }) => {
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
                value={formData.firstName}
                onChange={(e) => handleFormChange("firstName", e.target.value)}
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
          <div className="right-side-form-step2">
            <div className="form-inputs relative mb-5">
              <label className="bg-white text-gray-600">Month</label>
              <select
                id="monthInput"
                className="w-full py-2 border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
                value={formData.month}
                onChange={(e) => handleFormChange("month", e.target.value)}
              >
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>

            <div className="form-inputs relative mb-5">
              <label className="bg-white text-gray-600">Year</label>
              <input
                id="yearInput"
                type="number"
                className="px-1 py-2 w-full border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
                value={formData.year}
                onChange={(e) => handleFormChange("year", e.target.value)}
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

          <CountrySelect />
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 checkbox"
              checked={formData.contactViaEmail}
              onChange={(e) =>
                handleFormChange("contactViaEmail", e.target.checked)
              }
            />
            <span className="checkText">Please contact me via email</span>
          </div>
          <div className="termsAgreement">
            <span className="text-opacity-60 text-xs font-normal">
              By clicking Create account, I agree that I have read and accepted
              the
            </span>{" "}
            {""}
            <Link
              to="/terms"
              className="text-blue-600 text-xs font-normal underline"
            >
              Terms of Use
            </Link>
            <span className="text-opacity-60 text-xs font-normal"> and </span>
            <Link
              to="/privacy-policy"
              className="text-blue-600 text-xs font-normal underline"
            >
              Privacy Policy
            </Link>
            <span className="text-opacity-60 text-xs font-normal">.</span>
          </div>

          <div className="submit-button pt-8 flex justify-end">
            <Link to="/sign-in">
              <input
                type="submit"
                className="btn-prima submit-button-input"
                onClick={() => setCurrentStep()}
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
