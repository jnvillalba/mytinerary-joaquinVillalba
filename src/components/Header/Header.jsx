import React from 'react';
import './Header.css'; // Import the CSS file with the styles

const Header = () => {
  return (
    <div className="Header">
      <div className="MyTinerary">My Tinerary</div>
      <div className="Nav">
         {/* cambiar a nav a */}
        <div className="Home">Home</div>
        <div className="Cities">Cities</div>
        <div className="Login">
            {/* cambiar a button */}
          <div className="HeroiconsOutlineUser">
            <div className="Vector"></div>
          </div>
          <div className="LoginText">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
