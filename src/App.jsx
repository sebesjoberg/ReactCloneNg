import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./pages/StartPage";

export default class App extends Component {
  state = {};
  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <StartPage />,
        errorElement: <StartPage />,
      },
    ]);
    return <RouterProvider router={router} />;
  }
}
