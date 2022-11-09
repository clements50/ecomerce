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
        className={` bg-black opacity-0 h-screen w-screen fixed transition-opacity duration-300 ease-in-out 
        ${cartOpen ? "opacity-75 left-0" : "left-full"} `}
      ></div>
      <div
        className={`bg-white right-0 h-screen w-11/12 transition-transform duration-300 ease-in fixed 
        lg:w-1/4 px-6 py-8 ${!cartOpen && "translate-x-full"} `}
      >
        <div className="flex justify-between mb-4">
          <p className="font-semibold text-xl">Shopping Cart</p>
          <div onClick={() => cartCloseHandler()}>Close</div>
        </div>
        <div className="overflow-scroll h-80 border-2 border-violet-400">
          <p className="font-semibold text-lg">Subtotal</p>
        </div>
        <div className="mt-8">
          <div className="flex justify-between">
            <p className="font-semibold text-lg">Subtotal</p>
            <p className="font-semibold text-lg">$262.00</p>
          </div>
          <p className="text-gray-500 mb-4">
            Shipping and taxes calculated at <br /> checkout
          </p>
          <button className="bg-blue-700 text-white p-3 w-full rounded-md mb-5">
            Checkout
          </button>
          <div className="flex gap-1 w-fit m-auto">
            <p className="text-gray-500">or</p>
            <p className="text-blue-700">Continue Shopping &rarr;</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
