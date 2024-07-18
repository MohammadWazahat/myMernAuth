import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import LogIn from "./Auth/LogIn";
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
    element: <Dashboard />,
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
