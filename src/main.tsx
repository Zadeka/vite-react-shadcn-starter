import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Import router modules
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen"; // <-- File ini otomatis digenerate oleh plugin!

// Import Query Client
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

// Create Router instance
const router = createRouter({ routeTree });

// Register tipe router untuk TypeScript
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
