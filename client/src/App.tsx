import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShopingCart";
import data from "./data/data.json";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const loader = () => {
  return data;
};

function App() {
  const [navMenuActive, setNavMenuActive] = useState<boolean>(false);

  const navMenuHandler = () =>
    !navMenuActive ? setNavMenuActive(true) : setNavMenuActive(false);

  return (
    <>
      <Header navMenuHandler={navMenuHandler} navMenuActive={navMenuActive} />
      <ShoppingCart />
      <main className="min-h-screen py-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
