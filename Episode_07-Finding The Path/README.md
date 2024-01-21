# Installation Of project
  -->npm i
  -->npm start    

# Run project
  --npm start OR npm run start(to start development server)

# Swiggy API
->https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2920121&lng=70.7874667&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

# 2 types of routing in web apps
  -- 1. Client side Routing => in react we use client side routing we not send request to the server
  -- 2. Server side Routing => make a network call and fetch .html file using <a></a>

# Routing configuration
  -->import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

  -->createBrowserRouter =>  This function is used to create a router instance. It's typically used to define the routes and configuration for your application.

  -->RouterProvider => This component is a context provider that makes the router instance available to the rest of your application. It needs to wrap around the root component of your app.

  -->Outlet => This component is a placeholder where the content for the matched route will be rendered. It is used within the components that represent the layouts where the content will be inserted.

# useRouteError Hook
  -->import { useRouteError } from 'react-router-dom';
  -->const err = useRouteError(); => it return error object if url wrong.

# useParam Hook

 -->import { useParams } from "react-router-dom";
 -->const { param1 } = useParams();
 
 -->Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.

 -->The useParams hook from React Router does not take any arguments.