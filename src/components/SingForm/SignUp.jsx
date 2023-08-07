import React, { useState } from "react";
import "./SignUp.css";
import SignUpStep1 from "./SingUpSteps/SignUpStep1";
import SignUpStep2 from "./SingUpSteps/SignUpStep2";
const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="singForm__container overflow-hidden px-5 lg:px-20 xl:px-32 py-5">
      <div className="hidden md:block md:w-1/2 left-side h-full text-white">
        <h2 className="signUp__logo">My Tinerary</h2>
      </div>

      <div className="w-full md:w-1/2 right-side">
        {currentStep === 1 && (
          <SignUpStep1 setCurrentStep={() => setCurrentStep(2)} />
        )}
        {currentStep === 2 && (
          <SignUpStep2 setCurrentStep={() => setCurrentStep(1)} />
        )}
      </div>
    </div>
  );
};

export default SignUp;
