import { useEffect, useState } from "react";
// import classes from "../ComponentCSS/User.module.css";

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
    <div>
      <h1 className="py-2">Count = {count}</h1>
      <h2 className="py-2">Name: {props.name}</h2>
      <h3 className="py-2">Location: Rajkot</h3>
      <h4 className="py-2">Contact: @raziullah3</h4>
    </div>
  );
};

export default User;
