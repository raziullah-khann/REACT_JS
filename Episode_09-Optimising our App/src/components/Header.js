import React, { useState } from "react";
import logo from "../Images/appLogo.png";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import classes from "../ComponentCSS/Header.module.css";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const changeLoginHandler = () => {
    // login === "Login" ? setLogin("Logout") : setLogin("Login");
    setLogin((prevState) => (prevState === "Login" ? "Logout" : "Login"));
  };

  let as = onlineStatus ? "🟢" : "🔴";
  
  return (
    <div className={classes.header}>
      <div className="logo-header">
        <img className={classes.logo} src={logo} alt="Not found" />
      </div>
      <div className={classes["nav-items"]}>
        <ul>
          <li className={classes.onlineStatus}>Online Status: {as}</li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/grocery"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Grocery
            </NavLink>
          </li>
          <li>Cart</li>
          <button className={classes.login} onClick={changeLoginHandler}>
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
