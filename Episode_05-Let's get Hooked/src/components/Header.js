import React from "react";
import logo from "../Images/appLogo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-header">
        <img className="logo" src={logo} alt="Not found" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
