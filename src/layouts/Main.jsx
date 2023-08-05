import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Main = ({ children, background }) => {
  const mainStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };
  

  return (
    <div style={mainStyle}>
      {children}
      <Footer />
    </div>
  );
};

export default Main;
