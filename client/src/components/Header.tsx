import { useContext } from "react";
import Hamburger from "./Hamburger";
import Nav from "./Nav";
import { CartContext } from "../context/CartContext";
import { HeaderContext } from "../context/HeaderContext";
import { BsBagFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type Props = {
  navMenuToggle: () => void;
  navMenuActive: boolean;
};

const Header = ({ navMenuToggle, navMenuActive }: Props) => {
  const { visible } = useContext(HeaderContext);
  const { toggleCart, totalCartItems } = useContext(CartContext);
  const navigate = useNavigate();

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
        <p
          className="text-gray-300 text-xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          Logo
        </p>
        <Nav navMenuActive={navMenuActive} navMenuToggle={navMenuToggle} />
        <div
          className="text-gray-300 text-xl cursor-pointer"
          onClick={() => toggleCart()}
        >
          <div className="relative h-fit">
            <BsBagFill className="text-2xl" />
            {totalCartItems > 0 && (
              <div
                className="absolute flex items-center justify-center right-4 -bottom-1 bg-red-700 text-sm p-2 
                rounded-full w-3 h-3"
              >
                {totalCartItems}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
