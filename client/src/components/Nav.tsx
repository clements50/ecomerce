import { Link } from "react-router-dom";

type Props = {
  navMenuActive: boolean;
  navMenuToggle: () => void;
};

const Nav = ({ navMenuActive, navMenuToggle }: Props) => {
  return (
    <nav
      className={` absolute bg-zinc-800 top-16 w-screen h-screen -left-full lg:bg-zinc-800 lg:static
      lg:h-fit lg:w-fit ease-out duration-500 ${navMenuActive && "left-0"}`}
    >
      <ul className="flex flex-col items-center gap-3 py-8 lg:flex-row lg:py-0">
        <Link
          to="/"
          className="text-zinc-300 text-3xl left-10 lg:text-xl"
          onClick={() => navMenuToggle()}
        >
          Home
        </Link>
        <Link
          to="/"
          className="text-zinc-300 text-3xl lg:text-xl"
          onClick={() => navMenuToggle()}
        >
          Shop
        </Link>
        <Link
          to="/"
          onClick={() => navMenuToggle()}
          className="text-gray-300 text-3xl lg:text-xl"
        >
          About
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
