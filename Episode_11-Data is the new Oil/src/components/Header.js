import React, { useState, useContext  } from "react";
import logo from "../Images/appLogo.png";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import classes from "../ComponentCSS/Header.module.css";
import tailwind from '../ComponentCSS/Header.css';
import UserContext from "../utils/UserContext";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //here we use context 
  const { loggedInUser } = useContext(UserContext);
// console.log("Context API Data", loggedInUser);

  const changeLoginHandler = () => {
    // login === "Login" ? setLogin("Logout") : setLogin("Login");
    setLogin((prevState) => (prevState === "Login" ? "Logout" : "Login"));
  };

  let status = onlineStatus ? "🟢" : "🔴";
  
  return (
    <div className="flex justify-between bg-pink-100 shadow-xl z-10 sticky top-0">
      <div className="">
        <img className="w-24 " src={logo} alt="Not found" />
      </div>
      <div className={"flex items-center"}>
        <ul className="flex justify-evenly mx-4">
          <li className={"mx-4"}>Online Status: {status}</li>
          <li className={"mx-4"}>
            <NavLink 
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li className={"mx-4"}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About Us
            </NavLink>
          </li>
          <li className={"mx-4"}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li className={"mx-4"}>
            <NavLink
              to="/grocery"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Grocery
            </NavLink>
          </li>
          <li className={"mx-4"}>
            <NavLink
              to="/loader"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Loader
            </NavLink>
          </li>
          <li className={"mx-4"}>Cart</li>
          <button className={"mx-4"} onClick={changeLoginHandler}>
            {login}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
