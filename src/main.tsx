import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import "./index.css";
import { JarsComponent } from "./Components/Jars/JarsComponent";
import { ErrorPage } from "./Components/ErrorPage";
import { Contacts } from "./Components/Contacts/Contacts";
import { Home } from "./Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
  {
    path: "/data",
    element: <JarsComponent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
