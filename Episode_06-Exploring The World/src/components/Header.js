import React, { useState } from "react";
import logo from "../Images/appLogo.png";

const Header = () => {
  const [login, setLogin] = useState('Login');

  const changeLoginHandler = () => {
    login === 'Login' ? setLogin('Logout') : setLogin('Login');
  }
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
          <button className="login" onClick={changeLoginHandler}>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
