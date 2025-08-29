import { createBrowserRouter } from "react-router-dom";

import { Home } from "@/pages";
import { Layout } from "@/shared/components";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
