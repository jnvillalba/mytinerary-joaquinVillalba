import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import CountrySelect from "../CountrySelect/CountrySelect";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  photo: Yup.string().required("Photo url is required"),
});

const SignUpStep2 = ({ handleRegister, formData, handleFormChange }) => {
  const formik = useFormik({
    initialValues: {
      name: formData.name,
      lastName: formData.lastName,
      photo: formData.photo,
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      handleRegister();
    },
  });

  const handleInputChange = (field, value) => {
    handleFormChange(field, value);
    formik.setFieldValue(field, value, true);
  };

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
          <form onSubmit={formik.handleSubmit}>
            <div className="right-side-form-step2">
              <div className="form-inputs relative mb-5">
                <label className="bg-white text-gray-600">First Name</label>
                <input
                  id="firstNameInput"
                  type="text"
                  className="w-full px-2 py-2 border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
                  name="name"
                  value={formik.values.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="form-inputs relative mb-5">
                <label className="bg-white text-gray-600">Last Name</label>
                <input
                  id="lastNameInput"
                  type="text"
                  className="px-1 py-2 w-full border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500">{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>

            <div className="form-inputs relative mb-5">
              <label className="bg-white text-gray-600">Photo</label>
              <input
                id="photoInput"
                type="text"
                className="px-1 py-2 w-full border-b border-gray-400 focus:border-indigo-900 focus:outline-none bg-transparent"
                name="photo"
                value={formik.values.photo}
                onChange={(e) => handleInputChange("photo", e.target.value)}
                onBlur={formik.handleBlur}
              />
              {formik.touched.photo && formik.errors.photo ? (
                <div className="text-red-500">{formik.errors.photo}</div>
              ) : null}
            </div>

            <CountrySelect
              formData={formData}
              handleFormChange={handleFormChange}
            />

            <div className="submit-button pt-8 flex justify-end">
              <input
                type="submit"
                className="btn-prima submit-button-input"
                value={"Create Account"}
                disabled={!formik.isValid}
                onClick={() => handleRegister()}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpStep2;
