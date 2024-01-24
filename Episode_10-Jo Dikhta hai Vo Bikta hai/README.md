# Installation Of project
  -->npm i
  -->npm start    

# Run project
  --npm start OR npm run start(to start development server)

# Swiggy API
->https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2920121&lng=70.7874667&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

# customHook

# Understanding the Need for Custom Hooks
 --Before creating a custom hook, identify a piece of logic or functionality that you want to share across multiple components. This could be state management, data fetching, form handling, or any other reusable logic.

# Create a New File for the Custom Hook
  -->Start by creating a new file for your custom hook. The file should have a .js extension.

# Define the Custom Hook
 --> Inside your new file, define the custom hook as a regular JavaScript function. Custom hooks should follow the naming convention of starting with the word "use" (e.g., useCustomHook).

# Make useOnlineStatus custom Hook
 --> src/utils/useOnlineStatus.js

 -->Whenever we make custom hook then focus finalize thecontract
    --> 1. What is the input of the hook
    --> 2. What is the output of the hook

# key concept of optimization   
  1. Chunking
  2. Code splitting
  3. Dynamic Bundling
  4. Lazy Loading 
  => initially not loading grocery whenever we gon grocery page then load grocery component
  => This is a lazy loading strategy, and it aims to improve the initial page load performance by   prioritizing the loading of resources that are immediately visible to the user.

  5. Dynamic import
    --> const Grocery = lazy(() => import("./components/Grocery/Grocery"));
  6.On demand Loading
