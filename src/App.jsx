import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./pages/StartPage";
import i18n from "./assets/i18n/i18n";
import { I18nextProvider } from "react-i18next";
function App() {
  const [state, setState] = useState();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <StartPage />,
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
