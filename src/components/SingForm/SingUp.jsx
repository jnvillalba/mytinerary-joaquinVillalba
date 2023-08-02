import React from "react";
import "./SingUp.css";
const SingUp = () => {
  return (
    <div className="singForm__container  overflow-hidden bg-[url('/sing-background.jfif')] bg-cover bg-center">
      <div className="left-side h-full text-white">
        <h6 className="signUp__logo">My Tinerary</h6>
      </div>

      <div className="right-side">
        <div className="right-side-top">
          <div className="step-text">step 1 of 2</div>
          <div className="text-zinc-900 text-3xl font-semibold py-8">
            Create account
          </div>
          <div className="social-sing">Facebook Google</div>
          <div className="w-96 h-9 py-2.5 justify-between items-center gap-2.5 inline-flex">
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
                fill-opacity="0.6"
              />
            </svg>
            <div className="w-48 h-px opacity-50 border border-zinc-900 border-opacity-60"></div>
          </div>
        </div>
        <div className="form-inputs relative mb-5">
          <input
            type="text"
            placeholder="User name"
            className="w-full h-10 border-2 border-gray-300 rounded-md pl-10 focus:border-black focus:outline-none"
          />
        </div>
        <div className="form-inputs relative mb-5">
          <input
            type="email"
            placeholder="Email"
            autoComplete="chrome-off"
            className="w-full h-10 border-2 border-gray-300 rounded-md pl-10 focus:border-black focus:outline-none"
          />
        </div>
        <div className="form-inputs relative mb-5">
          <input
            id="password_input"
            className="password-input w-full h-10 border-2 border-gray-300 rounded-md pl-10 focus:border-black focus:outline-none"
            autoComplete="chrome-off"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="submit-button mt-4">
          <input
            type="submit"
            className="w-full h-10 bg-indigo-800 rounded-md text-white text-xs uppercase cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SingUp;
