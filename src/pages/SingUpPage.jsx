import React from 'react';
import SingUp from '../components/SingForm/SingUp';
import Main from '../layouts/Main';

const SingUpPage = () => {
  return (
    <Main background="/public/sing-background.jfif">
      <SingUp />
    </Main>
  );
};

export default SingUpPage;