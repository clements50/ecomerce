import { createContext, useState } from "react";

type Props = {
  children: JSX.Element;
};

type CartToggleContext = {
  cartOpen: boolean;
  toggleCartHandler: () => void;
};

export const CartContext = createContext({} as CartToggleContext);

const CartContextProvider = ({ children }: Props) => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const toggleCartHandler = (): void => {
    setCartOpen((cartOpen) => !cartOpen);
  };

  return (
    <>
      <CartContext.Provider value={{ cartOpen, toggleCartHandler }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
