import React from "react";
import ReactDOM from "react-dom/client";
import App, { loader as Root } from "./App";
import Shop from "./pages/Shop";
import ItemPage from "./pages/ItemPage";
import Error from "./pages/Error";
import ContextProvider from "./context/ContextProvider";
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
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
