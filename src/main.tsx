import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./route";
import Loader from "./components/loader/Loader";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </React.Suspense>
  </React.StrictMode>
);
