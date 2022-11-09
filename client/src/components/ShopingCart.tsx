import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";

type Props = {
  cartOpen: boolean;
  cartCloseHandler: () => void;
};

const ShoppingCart = ({ cartOpen, cartCloseHandler }: Props) => {
  return (
    <>
      <div
        className={` h-screen w-screen fixed transition-colors ${
          cartOpen ? "bg-rgb-black left-0" : "left-full"
        } 
          h-screen fixed w-screen transition-colors duration-300 ease-in `}
      ></div>
      <div
        className={`bg-white right-0 h-screen w-11/12 transition-transform duration-300 ease-in fixed 
        lg:w-1/4 ${!cartOpen && "translate-x-full"} `}
      >
        <div onClick={() => cartCloseHandler()}>Close</div>
      </div>
    </>
  );
};

export default ShoppingCart;
