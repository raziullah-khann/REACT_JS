# Installation Of project
  -->npm i
  -->npm start    

# Run project
  --npm start OR npm run start(to start development server)

# Swiggy API
->https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2920121&lng=70.7874667&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

# Class Components
 --> A class-based component in React is a way to define a component using ES6 classes. 
 -->Class components extend the React.Component class provided by the React library.

# 1.State Management:

 -->State is initialized in the constructor using this.state.
 -->State can be updated using this.setState(). 

# 2.Lifecycle Methods:

 -->Class components have lifecycle methods such as componentDidMount, componentDidUpdate, and          componentWillUnmount for managing side effects. 

# 3.Class Methods:

 -->Methods are defined using the class method syntax. If they are used as event handlers, they need to be bound to the component instance or declared using arrow function syntax to automatically bind this.

# 4.Props:

 -->Props are accessed using this.props.  

# How to execute class component

-->(1) constructor()
-->(2) Render()
  -->(3) <HTML>
-->(4) componentDidMount()
    -->API data
    --><this.setState>
  -->(5) Render()
  -->(6) <HTML new API data>
-->(7) componentDidUpdate()
-->(8) componentDidUnmount()
