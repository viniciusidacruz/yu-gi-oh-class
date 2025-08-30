import { RouterProvider } from "react-router-dom";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient, routes } from "@/config";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <RouterProvider router={routes} />
      </NuqsAdapter>
    </QueryClientProvider>
  );
};
