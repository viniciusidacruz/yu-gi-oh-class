import { RouterProvider } from "react-router-dom";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";

import { routes } from "@/config";

export const App = () => {
  return (
    <NuqsAdapter>
      <RouterProvider router={routes} />
    </NuqsAdapter>
  );
};
