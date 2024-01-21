# Run project
  --npm start OR npm run start(to start development server)

# Swiggy API
->https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2920121&lng=70.7874667&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

# Food Odering App
# 1. header
 -logo
 -navbar

# 2. Body
 -Search-bar
 -restaurant-container
   -Restaurant-card 
     -Img
     ->https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gmyhcgd6fgtvnvhv8jic (cloudinaryImageId)
     -Name of res, Star Rating, cuisine, delivary time etc.

# 3. Footer
 -copyright
 -link
 -Address
 -contact     

# Now separate our code in multiple files
-There are two way export/import files 
  -> 1. default export <function_name> => not use crly braces => only variable export
  -> 2. named export => use curly braces whenever import the file => multiple variable export

# React Hook
(Normal Javascript Utility Function)
Two important hooks
1.useState() -> superpowerful state variable in react
2.useEffect()  

# NOTE :userState() -> when ever state variable change then component is rerender
-->userState(arg) takes one initial argument means array, object, number, string, boolean.
--> It returns the current value and setter function
    const [count, setCount] = useState(0);

--> Whenever we want to update state then use setter function 
        setCount((count) => count + 1);

-->setter function track the previous state value.

# What is Actual DOM?
--> Actual DOM are tags like
      <div>, <img>, <p>

# What is Virtual DOM? 
--> Virtual DOM is a representation of Actual DOM.

# What is Diff Algorithm

-->
The "diffing" algorithm, also known as the reconciliation algorithm, is a crucial part of virtual DOM systems like React. Its primary purpose is to efficiently update the actual DOM based on changes in the virtual DOM. When state or data changes in a React application, a new virtual DOM tree is created, and the diffing algorithm compares it to the previous virtual DOM tree to determine the minimal set of changes needed to update the actual DOM.