import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./pages/StartPage";
import EventPage from "./pages/EventPage";
import NationPage from "./pages/NationPage";
import i18n from "./assets/i18n/i18n";
import { I18nextProvider } from "react-i18next";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPage />,
      errorElement: <StartPage />,
    },
    {
      path: "/event/:id",
      element: <EventPage />,
      errorElement: <StartPage />,
    },
    {
      path: "/nation/:nation",
      element: <NationPage />,
      errorElement: <StartPage />,
    },
  ]);
  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  );
}
export default App;
