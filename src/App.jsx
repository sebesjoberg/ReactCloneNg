import React, { Component, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./pages/StartPage";

const App = () => {
  const [state, setState] = useState();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPage />,
      errorElement: <StartPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
