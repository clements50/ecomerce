import CartContextProvider from "./CartContext";
import HeaderContextProvider from "./HeaderContext";

type ContextProviderProps = {
  children: JSX.Element;
};

const ContextProvider = ({ children }: ContextProviderProps) => {
  return (
    <HeaderContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </HeaderContextProvider>
  );
};

export default ContextProvider;
