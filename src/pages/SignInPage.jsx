import React from 'react';
import SignUp from '../components/SingForm/SignUp';
import Main from '../layouts/Main';
import Header from '../components/Header/Header';
import SignIn from '../components/SingForm/SignIn';

const SignInPage = () => {
  return (
    <Main background="/sign-in-bg.jpg">
      <Header textColor="#fff" />
      <SignIn />
    </Main>
  );
};

export default SignInPage;
