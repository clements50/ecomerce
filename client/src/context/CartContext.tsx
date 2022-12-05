import { createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "../reducers/CartReducer";
import { Action } from "../reducers/CartReducer";

type Props = {
  children: JSX.Element;
};

type CartItem = {
  name: string;
  size: string;
  price: number;
  qty: number;
  stock: number;
  id: string;
  img: string;
};

type CartContext = {
  cartOpen: boolean;
  toggleCart: () => void;
  cartState: CartItem[] | [];
  dispatch: React.Dispatch<Action>;
  totalCartItems: number;
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

  //@ts-ignore
  const totalCartItems = cartState.reduce(
    (result: number, current: CartItem) => result + current.qty,
    0
  );

  useEffect(() => {
    localStorage.setItem("CART_STATE", JSON.stringify(cartState));
  }, [cartState]);

  return (
    <>
      <CartContext.Provider
        value={{
          cartOpen,
          toggleCart,
          dispatch,
          totalCartItems,
          cartState,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
