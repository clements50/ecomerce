import { useContext } from "react";
import Hamburger from "./Hamburger";
import Nav from "./Nav";
import { CartContext } from "../context/cartContext";
import scrollHook from "../hooks/Scroll";

type Props = {
  navMenuHandler: () => void;
  navMenuActive: boolean;
};

const Header = ({ navMenuHandler, navMenuActive }: Props) => {
  const [visible] = scrollHook();
  const { toggleCartHandler } = useContext(CartContext);

  return (
    <header
      className={`bg-zinc-800 h-16 fixed ${
        visible ? "top-0" : "-top-16"
      } w-screen duration-500 ease-in-out`}
    >
      <div className="w-11/12 mx-auto flex items-center justify-between h-full">
        <Hamburger
          navMenuActive={navMenuActive}
          navMenuHandler={navMenuHandler}
        />
        <p className="text-white text-lg">Logo</p>
        <Nav navMenuActive={navMenuActive} navMenuHandler={navMenuHandler} />
        <div
          className="text-white text-lg cursor-pointer"
          onClick={() => toggleCartHandler()}
        >
          ({0}) Cart
        </div>
      </div>
    </header>
  );
};

export default Header;
