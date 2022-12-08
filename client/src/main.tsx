import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ContextProvider from "./context/ContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop, { loader as ShopLoader } from "./pages/Shop";
import ItemPage, { loader as ItemPageLoader } from "./pages/ItemPage";
import ShippingPage from "./pages/ShippingPage";
import Error from "./pages/Error";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
      {
        path: "/checkout/shipping",
        element: <ShippingPage />,
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
