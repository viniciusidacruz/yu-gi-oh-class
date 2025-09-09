import { createBrowserRouter } from "react-router-dom";

import { Checkout, Home } from "@/pages";
import { Layout } from "@/shared/components";
import { ROUTES } from "@/shared/constants";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.CHECKOUT,
        element: <Checkout />,
      },
    ],
  },
]);
