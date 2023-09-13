import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SignInStepBottom from "./SignInStepBottom";
import userActions from "../../store/actions/userActions";

const SignIn = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "The password must be at least 6 characters")
      .required("Email is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const redirection = () => {
    if (token) {
      navigate("/cities");
    }
  };

  useEffect(() => {
    redirection();
  }, [token]);

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(userActions.sign_in(values));
    navigate("/cities");
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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => handleSubmit(values)}
            >
              <Form>
                <div className="form-inputs relative mb-5">
                  <label className="bg-white text-gray-600">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full px-1 py-2 border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-inputs relative mb-5">
                  <label className="bg-white text-gray-600">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="px-1 py-2 w-full border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="submit-button pt-8 flex justify-end">
                  <button
                    type="submit"
                    className="btn-prima submit-button-input"
                  >
                    Continue
                  </button>
                </div>
              </Form>
            </Formik>
            <SignInStepBottom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
