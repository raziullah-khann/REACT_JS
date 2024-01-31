import { Component } from "react";
import classes from "../ComponentCSS/UserClass.module.css";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "Nothing",
      },
      // count: 0,
    };
        // console.log("Child Constructor");
      
  }

  //Increment Function
  countIncrementHandler = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  async componentDidMount() {
    // console.log("componentDidMount");
    // API Call
    try {
      // const token = "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";
      const response = await fetch(
        "https://api.github.com/users/raziullah-khann"
      );
      // console.log("Hello Fetch", response);
      if (!response.ok) {
        throw new Error("Facing issue when fetching data!");
      }
      const data = await response.json();
      // console.log(data);   

      this.setState({ userInfo: data });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.count !== prevState.count){
      //it will be execute when count state will update or change
    }
    if(this.state.count2 !== prevState.count2){
      //it will be execute when count2 state will update or change
    }
    // console.log("ComponentDidUpdate!");
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount!");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log("Child Render");
    // const { count, count2 } = this.state;
    return (
      <div className={classes["user-card"]}>
        {/* <h1>Count = {count}</h1>
        <button onClick={this.countIncrementHandler}>Increment</button> */}
        {avatar_url && <img src={avatar_url} alt="Imge not loaded" />}
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @raziullah3</h4>
      </div>
    );
  }
}

export default UserClass;
