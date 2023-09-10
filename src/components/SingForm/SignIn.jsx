import React, { useRef } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import SignInStepBottom from "./SignInStepBottom";
const SignIn = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSignIn = () => {
    if (emailInputRef.current && passwordInputRef.current) {
      axios
        .post("http://localhost:3000/api/users/login", {
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));

        })
        .catch((error) => {
          error.response.data.message.forEach((message) =>
            console.log(message)
          );
        });
    }
  };

  return (
    <div className="singForm__container overflow-hidden px-5 lg:px-20 xl:px-32 py-5">
      <div className="hidden md:block md:w-1/2 left-side h-full text-white">
        <h2 className="signUp__logo">My Tinerary</h2>
      </div>

      <div className="w-full md:w-1/2 right-side">
        <div className="right-side-top">
          <div className="text-zinc-900 text-3xl font-semibold py-4">
            Sign in
          </div>
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
                ref={emailInputRef}
              />
            </div>

            <div className="form-inputs relative mb-5">
              <label className="bg-white text-gray-600">Password</label>
              <input
                id="passwordInput"
                type="password"
                className="px-1 py-2 w-full border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
                ref={passwordInputRef}
              />
            </div>

            <div className="submit-button pt-8 flex justify-end">
              <Link to="/">
                <input
                  type="submit"
                  className="btn-prima submit-button-input"
                  onClick={() => handleSignIn()}
                  value={"Continue"}
                />
              </Link>
            </div>
            <SignInStepBottom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
