import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShopingCart";
import data from "./data/data.json";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const loader = () => {
  return data;
};

function App() {
  const [navMenuActive, setNavMenuActive] = useState<boolean>(false);

  const navMenuToggle = () => {
    !navMenuActive ? setNavMenuActive(true) : setNavMenuActive(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header navMenuToggle={navMenuToggle} navMenuActive={navMenuActive} />
      <ShoppingCart />
      <main className="min-h-screen py-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
