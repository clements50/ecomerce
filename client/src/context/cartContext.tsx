import { createContext, useEffect, useReducer, useState } from "react";
import { json } from "react-router-dom";
import { cartReducer } from "../reducers/CartReducer";

type Props = {
  children: JSX.Element;
};

type CartContext = {
  cartOpen: boolean;
  toggleCart: () => void;
  cartState: CartItem[] | [];
  dispatch: any;
};

let cartItems = localStorage.getItem("CART_STATE")
  ? JSON.parse(localStorage.getItem("CART_STATE") || "")
  : [];

export const CartContext = createContext({} as CartContext);

const CartContextProvider = ({ children }: Props) => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const [cartState, dispatch] = useReducer(cartReducer, cartItems);

  const toggleCart = (): void => {
    setCartOpen((cartOpen) => !cartOpen);
  };

  useEffect(() => {
    localStorage.setItem("CART_STATE", JSON.stringify(cartState));
  }, [cartState]);

  return (
    <>
      <CartContext.Provider
        value={{ cartOpen, toggleCart, cartState, dispatch }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
