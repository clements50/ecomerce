import { createContext } from "react";
import useScroll from "../hooks/VisiblePrevScroll";

type headerContextProviderProps = {
  children: JSX.Element;
};

type HeaderContext = {
  visible: boolean;
  setVisible: (param: boolean) => void;
};

export const HeaderContext = createContext({} as HeaderContext);

const HeaderContextProvider = ({ children }: headerContextProviderProps) => {
  const [visible, setVisible] = useScroll();
  return (
    <HeaderContext.Provider value={{ visible, setVisible } as HeaderContext}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
