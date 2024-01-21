import {Component} from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent ComponentDidMount");
  }

  render(){
    // console.log("Parent Render");
    return (
      <div >
      <h1>About Class Component</h1>
      <h2>This is About Us page!</h2>
      <User name='Raziullah' />
      {/* <UserClass name='Raziullah' location="Rajkot" /> */}
    </div>
    );
  }
}
// const About = () => {
//   return (
//     <div >
//       <h1>About</h1>
//       <h2>This is About Us page!</h2>
//       {/* <User name='Raziullah function' /> */}
//       <UserClass name='Raziullah class' location="Rajkot class" />
//     </div>
//   );
// };

export default About;
