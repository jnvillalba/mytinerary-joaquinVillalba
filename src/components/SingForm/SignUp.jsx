import React, { useState } from "react";
import "./SignUp.css";
import CountrySelect from "./CountrySelect/CountrySelect";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="singForm__container overflow-hidden px-5 lg:px-20 xl:px-32 py-5">
      <div className="hidden md:block md:w-1/2 left-side h-full text-white">
        <h2 className="signUp__logo">My Tinerary</h2>
      </div>

      <div className="w-full md:w-1/2 right-side">
        {currentStep === 1 && (
          <>
            <div className="right-side-top">
              <div className="step-text">step 1 of 2</div>
              <div className="text-zinc-900 text-3xl font-semibold py-4">
                Create account
              </div>
              <div className="singup-socials">
                <button className="btn btn-circle btn-outline">
                  <img src="/i-google.svg" alt="fb-logo" />
                </button>
                <button className="btn btn-circle">
                  <img src="/i-fb.svg" alt="fb-logo" />
                </button>
              </div>

              <div className=" w-full h-9 py-4 justify-between items-center gap-2.5 inline-flex">
                <div className="w-48 h-px opacity-50 border border-zinc-900 border-opacity-60"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <path
                    d="M7.93438 18C5.51628 18 3.58737 17.1827 2.14765 15.5482C0.715884 13.9137 0 11.7896 0 9.17599C0 6.40054 0.735769 4.17937 2.20731 2.51247C3.6868 0.837492 5.70321 0 8.25653 0C10.5633 0 12.4285 0.805125 13.8523 2.41537C15.2841 4.01753 16 6.12138 16 8.7269C16 11.6076 15.2682 13.8732 13.8046 15.5239C12.341 17.1746 10.3843 18 7.93438 18ZM8.05369 1.09238C6.06513 1.09238 4.42655 1.82468 3.13796 3.28928C1.85732 4.75388 1.217 6.67161 1.217 9.04248C1.217 11.4376 1.8255 13.3473 3.04251 14.7714C4.25951 16.1875 5.88218 16.8955 7.91051 16.8955C10.0263 16.8955 11.7007 16.1955 12.9336 14.7957C14.1665 13.3877 14.783 11.4295 14.783 8.92111C14.783 6.46123 14.1785 4.54349 12.9694 3.1679C11.7683 1.78422 10.1298 1.09238 8.05369 1.09238Z"
                    fill="#1C1C1C"
                    fillOpacity="0.6"
                  />
                </svg>
                <div className="w-48 h-px opacity-50 border border-zinc-900 border-opacity-60"></div>
              </div>
            </div>
            <div className="right-side-bottom">
              <div className="right-side-text">
                <h6>Sign up with email</h6>
                <p>
                  Already have an account? {" "}
                  <Link to="/sign-in" className="sign-in">
                    Sign in
                    </Link>
                </p>
              </div>

              <div className="right-side-form pb-16">
                <div className="form-inputs relative mb-5">
                  <label className="bg-white text-gray-600">Email</label>
                  <input
                    id="emailInput"
                    type="email"
                    className="w-full px-1 py-2 border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
                  />
                </div>

                <div className="form-inputs relative mb-5">
                  <label className="bg-white text-gray-600">Password</label>
                  <input
                    id="passwordInput"
                    type="password"
                    className="px-1 py-2 w-full border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
                  />
                </div>

                <div className="submit-button pt-8 flex justify-end">
                  <input
                    type="submit"
                    className="btn-prima submit-button-input"
                    onClick={() => setCurrentStep(2)}
                    value={"Continue"}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {currentStep === 2 && (
          <>
            <div className="right-side-top">
              <div className="step-text">step {currentStep} of 2</div>
              <h6 className="create-account">Create account</h6>
            </div>
            <div className="right-side-bottom">
              <div className="right-side-text">
                <h6>Sign up with email</h6>
                <p>
                  Already have an account?{""}
                  <Link className="sign-in">
                    Sign in
                  </Link>
                </p>
              </div>

              <div className="right-side-form pb-16">
                <div className="right-side-form-step2 ">
                  <div className="form-inputs relative mb-5">
                    <label className="bg-white text-gray-600">First Name</label>
                    <input
                      id="firstNameInput"
                      type="text"
                      className="w-full px-2 py-2 border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
                    />
                  </div>

                  <div className="form-inputs relative mb-5">
                    <label className="bg-white text-gray-600">Last Name</label>
                    <input
                      id="lastNameInput"
                      type="text"
                      className="px-1 py-2 w-full border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
                    />
                  </div>
                </div>
                <div className="right-side-form-step2 ">
                  <div className="form-inputs relative mb-5">
                    <label className="bg-white text-gray-600">Month</label>
                    <select
                      id="monthInput"
                      className="w-full py-2 border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
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
                    />
                  </div>
                </div>
                <div className="form-inputs relative mb-5">
                  <label className="bg-white text-gray-600">Photo</label>
                  <input
                    id="photoInput"
                    type="text"
                    className="px-1 py-2 w-full border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
                  />
                </div>

                <CountrySelect />
                <div className="flex items-center">
                  <input type="checkbox"  className="mr-2 checkbox" />
                  <span className="checkText">Please contact me via email</span>
                </div>
                <div className="termsAgreement">
      <span className="text-opacity-60 text-xs font-normal">
        By clicking Create account, I agree that I have read and accepted the
      </span>{" "}
      {""}
      <Link to="/terms" className="text-blue-600 text-xs font-normal underline">
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
                    onClick={() => setCurrentStep(2)}
                    value={"Create Account"}
                  /></Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
