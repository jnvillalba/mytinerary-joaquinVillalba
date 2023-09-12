import React, { useState } from "react";
import "./SignUp.css";
import SignUpStep1 from "./SingUpSteps/SignUpStep1";
import SignUpStep2 from "./SingUpSteps/SignUpStep2";
import userActions from "../../store/actions/userActions";
import { useDispatch } from "react-redux";
const SignUp = () => {
  const dispatch = useDispatch()
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    photo: "",
    country: "",
  });
  const handleFormChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
      
    });
    
  };

  const handleRegister = () => {
    console.log(formData);
    dispatch(userActions.register_user(formData));
  };
  return (
    <div className="singForm__container overflow-hidden px-5 lg:px-20 xl:px-32 py-5">
      <div className="hidden md:block md:w-1/2 left-side h-full text-white">
        <h2 className="signUp__logo">My Tinerary</h2>
      </div>

      <div className="w-full md:w-1/2 right-side">
        {currentStep === 1 && (
          <SignUpStep1
          setCurrentStep={() => setCurrentStep(2)}
          formData={formData}
          handleFormChange={handleFormChange}
        /> 
        )}
        {currentStep === 2 && (
          <SignUpStep2 
          setCurrentStep={() => setCurrentStep(1)}
          formData={formData}
          handleFormChange={handleFormChange} handleRegister={handleRegister} />
        )}
      </div>
    </div>
  );
};

export default SignUp;
