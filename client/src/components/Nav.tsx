import { Link } from "react-router-dom";

type Props = {
  navMenuActive: boolean;
  setNavMenuActive: (paramater: boolean) => void;
};

const Nav = ({ navMenuActive, setNavMenuActive }: Props) => {
  return (
    <nav
      className={`absolute bg-zinc-800 top-16 h-screen w-screen left-0  lg:bg-zinc-800 lg:static lg:h-fit lg:w-fit ease-out duration-500 
          ${!navMenuActive && "-left-full"}`}
    >
      <ul className="flex flex-col items-center gap-3 py-8 lg:flex-row lg:py-0">
        <Link
          to="/"
          className="text-zinc-300 text-3xl left-10 lg:text-lg"
          onClick={() => setNavMenuActive(false)}
        >
          Home
        </Link>
        <Link
          to="/"
          className="text-zinc-300 text-3xl lg:text-lg"
          onClick={() => setNavMenuActive(false)}
        >
          Shop
        </Link>
        <Link
          to="/"
          onClick={() => setNavMenuActive(false)}
          className="text-gray-300 text-3xl lg:text-lg"
        >
          About
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
