type Props = {
  navMenuActive: boolean;
  setNavMenuActive: () => void;
};

const Hamburger = ({ navMenuActive, setNavMenuActive }: Props) => {
  return (
    <div
      className={`relative h-7 w-8 cursor-pointer ease-in-out duration-500 delay-100 lg:hidden ${
        navMenuActive && "rotate-180"
      }`}
      onClick={setNavMenuActive}
    >
      <div
        className={`absolute w-full h-1 bg-white top-0.5 ease-out duration-500 ${
          navMenuActive && "top-3 rotate-45"
        }`}
      ></div>
      <div
        className={`absolute w-full h-1 bg-white top-3 ease-out duration-500 ${
          navMenuActive && "opacity-0"
        }`}
      ></div>
      <div
        className={`absolute w-full h-1 bg-white bottom-0.5 ease-in duration-500 ${
          navMenuActive && "top-3 -rotate-45"
        }`}
      ></div>
    </div>
  );
};

export default Hamburger;
