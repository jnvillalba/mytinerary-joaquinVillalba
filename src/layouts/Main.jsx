import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Main = ({ children, background }) => {
  const mainStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={mainStyle}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Main;
