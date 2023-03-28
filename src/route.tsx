import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Contact = React.lazy(async () => {
  const [moduleExports] = await Promise.all([
    import("./pages/Contact"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]);
  return moduleExports;
});
const Services = React.lazy(async () => {
  const [moduleExports] = await Promise.all([
    import("./pages/Services"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]);
  return moduleExports;
});
const NotFound = React.lazy(async () => {
  const [moduleExports] = await Promise.all([
    import("./pages/NotFound"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]);
  return moduleExports;
});
const Home = React.lazy(async () => {
  const [moduleExports] = await Promise.all([
    import("./pages/Home"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]);
  return moduleExports;
});

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
