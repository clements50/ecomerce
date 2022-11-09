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
  const [cartOpen, setCartOpen] = useState(false);
  const [navMenuActive, setNavMenuActive] = useState<boolean>(false);

  const navMenuHandler = () =>
    !navMenuActive && !cartOpen
      ? setNavMenuActive(true)
      : setNavMenuActive(false);

  const cartCloseHandler = () => {
    !cartOpen && !navMenuActive ? setCartOpen(true) : setCartOpen(false);
  };

  return (
    <div className="relative overflow-hidden">
      <Header
        cartOpen={cartOpen}
        cartCloseHandler={cartCloseHandler}
        navMenuHandler={navMenuHandler}
        navMenuActive={navMenuActive}
      />
      <ShoppingCart cartOpen={cartOpen} cartCloseHandler={cartCloseHandler} />
      <main className="min-h-screen py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
