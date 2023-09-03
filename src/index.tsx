import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import ChartsAndMaps from "./pages/chartsandmaps/ChartsAndMaps";
import ContextProvider from "./providers/ContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// QueryClient declaration using tan-stack query
const queryClient = new QueryClient();

// router declaration for react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Contact></Contact>,
      },
      {
        path: "/chartsandmaps",
        element: (
          <div className="flex flex-col gap-40 p-8">
            <ChartsAndMaps></ChartsAndMaps>
          </div>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
