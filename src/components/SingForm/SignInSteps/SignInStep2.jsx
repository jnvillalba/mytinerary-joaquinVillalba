import React from "react";
import { Link } from "react-router-dom";
import SignInStepBottom from "./SignInStepBottom";
const SignInStep2 = ({ setCurrentStep }) => {
  return (
    <>
      <div className="right-side-top">
        <div className="step-text">step 2 of 2</div>
        <h6 className="create-account">Enter your password</h6>
      </div>
      <div className="right-side-bottom">
        <div className="right-side-form pb-16">
          <div className="user-info flex justify-start items-start gap-2.5 pb-4">
            <img
              className="w-16 h-16 rounded-full"
              src="https://via.placeholder.com/65x64"
              alt="user-img"
            />

            <div className="personal-info flex flex-col">
              <div className="text-zinc-900 text-base font-normal">
                miemail@gmail.com
              </div>
              <div className="text-zinc-900 text-opacity-60 text-xs font-normal">
                Personal Account
              </div>
            </div>
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
            <Link to="/">
              <input
                type="submit"
                className="btn-prima submit-button-input"
                onClick={() => setCurrentStep}
                value={"Continue"}
              />
            </Link>
          </div>
          <SignInStepBottom />
        </div>
      </div>
    </>
  );
};

export default SignInStep2;
