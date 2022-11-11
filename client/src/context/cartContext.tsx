import { createContext, useState } from "react";

type Props = {
  children: JSX.Element;
};

type CartToggleContext = {
  cartOpen: boolean;
  toggleCart: () => void;
};

export const CartContext = createContext({} as CartToggleContext);

const CartContextProvider = ({ children }: Props) => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const toggleCart = (): void => {
    setCartOpen((cartOpen) => !cartOpen);
  };

  return (
    <>
      <CartContext.Provider value={{ cartOpen, toggleCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
