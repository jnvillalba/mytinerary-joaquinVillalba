import React, { useState } from "react";
import "./SignUp.css";
import SignInStep1 from "./SignInSteps/SignInStep1";
import SignInStep2 from "./SignInSteps/SignInStep2";
const SignIn = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="singForm__container overflow-hidden px-5 lg:px-20 xl:px-32 py-5">
      <div className="hidden md:block md:w-1/2 left-side h-full text-white">
        <h2 className="signUp__logo">My Tinerary</h2>
      </div>

      <div className="w-full md:w-1/2 right-side">
        {currentStep === 1 && (
          <SignInStep1 setCurrentStep={() => setCurrentStep(2)} />

        )}
        {currentStep === 2 && (
          <SignInStep2 setCurrentStep={() => setCurrentStep(1)} />
        )}
      </div>
    </div>
  );
};

export default SignIn;
