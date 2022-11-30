import { useContext } from "react";
import Hamburger from "./Hamburger";
import Nav from "./Nav";
import { CartContext } from "../context/cartContext";
import useScroll from "../hooks/Scroll";

type Props = {
  navMenuToggle: () => void;
  navMenuActive: boolean;
};

const Header = ({ navMenuToggle, navMenuActive }: Props) => {
  const [visible] = useScroll();
  const { toggleCart, cartState } = useContext(CartContext);

  //@ts-ignore
  const totalCartItem = cartState.reduce(
    (result: number, current: CartItem) => result + current.qty,
    0
  );
  console.log(cartState);

  return (
    <header
      className={`bg-zinc-800 h-16 fixed z-10 ${
        visible ? "top-0" : "-top-16"
      } w-screen duration-500 ease-in-out`}
    >
      <div className="w-11/12 mx-auto flex items-center justify-between h-full">
        <Hamburger
          navMenuActive={navMenuActive}
          navMenuToggle={navMenuToggle}
        />
        <p className="text-gray-300 text-xl">Logo</p>
        <Nav navMenuActive={navMenuActive} navMenuToggle={navMenuToggle} />
        <div
          className="text-gray-300 text-xl cursor-pointer"
          onClick={() => toggleCart()}
        >
          ({totalCartItem}) Cart
        </div>
      </div>
    </header>
  );
};

export default Header;
