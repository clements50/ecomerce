import { useState } from "react";
import Hamburger from "./Hamburger";
import Nav from "./Nav";
import NavScroll from "../hooks/Scroll";

const Header = () => {
  const [navMenuActive, setNavMenuActive] = useState<boolean>(false);

  const navMenuHandler = () =>
    navMenuActive ? setNavMenuActive(false) : setNavMenuActive(true);

  const [visible] = NavScroll();

  return (
    <header
      className={`bg-zinc-800 h-16 fixed ${
        visible ? "top-0" : "-top-16"
      } w-screen duration-500 ease-in-out`}
    >
      <div className="w-11/12 mx-auto flex items-center justify-between h-full">
        <Hamburger
          navMenuActive={navMenuActive}
          setNavMenuActive={navMenuHandler}
        />
        <p className="text-white text-2xl">Logo</p>
        <Nav
          navMenuActive={navMenuActive}
          setNavMenuActive={setNavMenuActive}
        />
        <p className="text-white text-lg">({0}) Cart</p>
      </div>
    </header>
  );
};

export default Header;
