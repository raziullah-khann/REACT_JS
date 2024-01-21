import React, { useState } from "react";
import logo from "../Images/appLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const changeLoginHandler = () => {
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };
  return (
    <div className="header">
      <div className="logo-header">
        <img className="logo" src={logo} alt="Not found" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
          <Link to="/contact">Contact Us</Link>
            </li>
          <li>Cart</li>
          <button className="login" onClick={changeLoginHandler}>
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
