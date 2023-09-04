import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import ChartsAndMaps from "./pages/chartsandmaps/ChartsAndMaps";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContextProvider from "./providers/context/ContextProvider";
import AllContact from "./pages/contact/allcontact/AllContact";
import AddContact from "./pages/contact/addcontact/AddContact";
import EditContact from "./pages/contact/editcontact/EditContact";
import { Provider } from "react-redux";
import store from "./services/Store";

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
        children: [
          {
            path: "/",
            element: <AllContact></AllContact>,
          },
          {
            path: "/addcontact",
            element: <AddContact></AddContact>,
          },
          {
            path: "/editcontact",
            element: <EditContact></EditContact>,
          },
        ],
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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <RouterProvider router={router} />
        </ContextProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
