import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../home/Home";
import AboutUs from "../about/AboutUs";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/myjobs",
        element: "hello",
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

export default Routes;
