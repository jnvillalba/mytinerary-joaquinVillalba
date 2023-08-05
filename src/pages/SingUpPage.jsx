import React from 'react';
import SingUp from '../components/SingForm/SingUp';
import Main from '../layouts/Main';
import Header from '../components/Header/Header';

const SingUpPage = () => {
  return (
    <Main background="/sing-background.jfif">
      <Header textColor="#fff" />
      <SingUp />
    </Main>
  );
};

export default SingUpPage;
