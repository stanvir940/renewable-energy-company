import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../home/Home";

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
    ],
  },
]);

export default Routes;
