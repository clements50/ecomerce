import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShopingCart";
import data from "./data/data.json";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export const loader = () => {
  return data;
};

function App() {
  return (
    <>
      <Header />
      <main className="bg-gray-200 min-h-screen py-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
