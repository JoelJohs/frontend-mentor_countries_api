import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import CountryInfo from "./pages/CountryInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/country/:name",
        element: <CountryInfo />,
      },
    ],
  },
]);
