type Props = {
  navMenuActive: boolean;
  navMenuToggle: () => void;
};

const Hamburger = ({ navMenuActive, navMenuToggle }: Props) => {
  return (
    <div
      className={`relative h-[12.5px] w-[24px] flex items-center cursor-pointer ease-in-out duration-500 delay-100 lg:hidden ${
        navMenuActive && "rotate-180"
      }`}
      onClick={navMenuToggle}
    >
      <div
        className={`absolute bg-white h-[2.5px] w-full rounded-sm ease-in duration-500 ${
          !navMenuActive && "top-0"
        } ${navMenuActive && "rotate-[45deg]"}`}
      ></div>
      <div
        className={`absolute bg-white h-[2.5px] w-full rounded-sm ease-out duration-500 ${
          navMenuActive && "opacity-0"
        }`}
      ></div>
      <div
        className={`absolute bg-white h-[2.5px] w-full rounded-sm ease-in duration-500 ${
          !navMenuActive && "bottom-0"
        } ${navMenuActive && "-rotate-[45deg]"}`}
      ></div>
    </div>
  );
};

export default Hamburger;
