import React, { Component } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import EventPage from "./pages/EventPage";

export default class App extends Component {
  state = {};
  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <EventPage />,
        errorElement: <EventPage />,
      },
    ]);
    return <RouterProvider router={router} />;
  }
}
