import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const { cartOpen, toggleCart, cartState, totalCartItems, cartTotal } =
    useContext(CartContext);

  const navigate = useNavigate();

  let cartItems: any = (
    <p className=" text-gray-500 m-auto w-fit">Your Cart Is Empty...</p>
  );

  if (totalCartItems > 0) {
    cartItems = cartState.map((item) => {
      return (
        <CartItem
          name={item.name}
          price={item.price}
          size={item.size}
          qty={item.qty}
          stock={item.stock}
          id={item.id}
          img={item.img}
          key={uuid()}
        />
      );
    });
  }

  const checkoutClickHandler = () => {
    if (totalCartItems > 0) {
      navigate("checkout/shipping");
      toggleCart();
    }
  };

  return (
    <>
      <div
        className={` bg-black opacity-0 z-10 h-screen w-screen fixed transition-opacity duration-300 ease-in-out 
        ${cartOpen ? "opacity-75 left-0" : "left-full"} `}
      ></div>
      <div
        className={`bg-white right-0 z-20 h-screen w-11/12 transition-transform duration-300 ease-in fixed 
         px-6 py-8 flex flex-col lg:w-1/4 md:w-2/4 ${
           !cartOpen && "translate-x-full"
         } `}
      >
        <div className="flex justify-between mb-4">
          <p className="text-xl">Shopping Cart</p>
          <div
            onClick={() => toggleCart()}
            className="text-gray-500 cursor-pointer"
          >
            Close
          </div>
        </div>
        <div
          className={`overflow-scroll flex-grow ${
            totalCartItems > 0 && "border-t-2 border-t-gray-200"
          }`}
        >
          {cartItems}
        </div>
        <div className="mt-8">
          <div className="flex justify-between">
            <p className="text-lg">Subtotal</p>
            <p className="text-lg">${cartTotal}</p>
          </div>
          <p className="text-gray-500 mb-4">
            Shipping and taxes calculated at <br /> checkout
          </p>
          <button
            onClick={() => checkoutClickHandler()}
            className="bg-blue-700 text-white p-3 w-full rounded-md mb-5"
          >
            Checkout
          </button>
          <div
            className="flex gap-1 w-fit m-auto cursor-pointer"
            onClick={() => toggleCart()}
          >
            <p className="text-gray-500">or</p>
            <p className="text-blue-700">Continue Shopping &rarr;</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
