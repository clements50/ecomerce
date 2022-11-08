import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";

type Props = {
  cartOpen: boolean;
  cartCloseHandler: () => void;
};

const ShoppingCart = ({ cartOpen, cartCloseHandler }: Props) => {
  return (
    <div
      className={`bg-white h-screen w-screen p-7 fixed top-0 duration-300 ease-in ${
        !cartOpen && "translate-x-full"
      } `}
    >
      <div className="text-4xl font-semibold">Shopping Cart</div>
      <div className="h-4/5"></div>
      <button className="bg-blue-700 p-2 w-full rounded-md block m-auto text-white font-semibold">
        Checkout
      </button>
      <p
        className="text-center text-zinc-600"
        onClick={() => cartCloseHandler()}
      >
        Or{" "}
        <Link to="/" className="font-semibold text-blue-800">
          Continue Shopping
        </Link>
      </p>
    </div>
  );
};

export default ShoppingCart;
