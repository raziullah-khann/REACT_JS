import { useEffect, useState } from "react";
import classes from "../ComponentCSS/User.module.css";

const User = (props) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    //API Call
    //it will be execute when count state will update or change
    
    // const timer = setInterval(() => {
    //   console.log("Raziullah")
    // }, 1000);
  console.log("useEffect");

  // return () => {
  //   clearInterval(timer)
  //   console.log("useEffect Return");
  // };
  }, [count]);

  console.log("render");
  return (
    <div className={classes["user-card"]}>
      <h1>Count = {count}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Rajkot</h3>
      <h4>Contact: @raziullah3</h4>
    </div>
  );
};

export default User;
