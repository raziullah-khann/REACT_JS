import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoaderPage from "./components/Loader/Loader";

// import Grocery from "./components/Grocery/Grocery";

const Grocery = lazy(() => import("./components/Grocery/Grocery"));
const About = lazy(() => import("./components/About"))

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Header />
      <Outlet />
    </div>
  ); 
};

//Routing Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading About Us page</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/loader",
        element: <LoaderPage />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
