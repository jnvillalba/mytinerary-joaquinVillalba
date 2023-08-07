import React from "react";
import { Link } from "react-router-dom";
import SignInStepBottom from "./SignInStepBottom";
const SignInStep1 = ({ setCurrentStep }) => {
  return (
    <>
      <div className="right-side-top">
        <div className="step-text">step 1 of 2</div>
        <div className="text-zinc-900 text-3xl font-semibold py-4">Sign in</div>
      </div>
      <div className="right-side-bottom">
        <div className="right-side-text">
          <p>
          New user?{" "}
            <Link to="/sign-up" className="sign-in">
              Create account
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

          <div className="submit-button pt-8 flex justify-end">
            <input
              type="submit"
              className="btn-prima submit-button-input"
              onClick={() => setCurrentStep()}
              value={"Continue"}
            />
          </div>
          <SignInStepBottom/>
        </div>
      </div>
    </>
  );
};

export default SignInStep1;
