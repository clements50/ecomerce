import React from "react";
import ReactDOM from "react-dom/client";
import App, { loader as Root } from "./App";
import Shop from "./pages/Shop";
import ItemPage, { loader as ItemLoader } from "./pages/ItemPage";
import Error from "./pages/Error";
import CartContextProvider from "./context/cartContext";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//fsafj

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: Root,
    errorElement: <Error />,
    id: "root",
    children: [
      {
        index: true,
        element: <Shop />,
      },
      {
        path: "/shop/items/:id",
        element: <ItemPage />,
        loader: ItemLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
