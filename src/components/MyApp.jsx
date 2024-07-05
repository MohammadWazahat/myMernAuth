import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import LogIn from "./Auth/LogIn";
import GetAllusers from "./Auth/GetAllusers";
import Dashboard from "./Dashboard";

const route = createBrowserRouter([
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/logIn",
    element: <LogIn />,
  },
  {
    path: "/",
    element: <GetAllusers />,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
]);

const MyApp = () => {
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
};

export default MyApp;
