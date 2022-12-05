import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ContextProvider from "./context/ContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop, { loader as ShopLoader } from "./pages/Shop";
import ItemPage, { loader as ItemPageLoader } from "./pages/ItemPage";
import Error from "./pages/Error";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    id: "root",
    children: [
      {
        index: true,
        element: <Shop />,
        loader: ShopLoader,
      },
      {
        path: "/shop/items/:id",
        element: <ItemPage />,
        loader: ItemPageLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
