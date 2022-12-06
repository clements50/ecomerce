import Error from "./Error";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { HeaderContext } from "../context/HeaderContext";
import Carousel from "../components/ProductPageCarousel";
import SizeSelection from "../components/SizeSelection";
import { getShopItem } from "../utils/api";
import CartItem from "../components/CartItem";

type Varient = {
  size: string;
  stock: number;
};

export const loader = ({ params }: any) => {
  return getShopItem(params.id);
};

const ItemPage = () => {
  const item = useLoaderData() as ShopItem;

  const { name, price, id, images, varients, description } = item;

  const { dispatch, cartState } = useContext(CartContext);
  const { setVisible } = useContext(HeaderContext);
  const [selectedVarient, setSelectedVarient] = useState<Varient | null>(null);
  const [cartQtyError, setCartQtyError] = useState(false);

  const addToCart = () => {
    if (selectedVarient && !toManyDuplicatesInCart) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          name,
          price,
          id,
          img: images[0],
          size: selectedVarient.size,
          stock: selectedVarient.stock,
        },
      });
      return setVisible(true);
    }
    return setCartQtyError(true);
  };

  const toManyDuplicatesInCart = cartState.some(
    (cItem) =>
      cItem.id === id &&
      cItem.size === selectedVarient?.size &&
      cItem.qty === 10
  );

  const maxQuantityInCartMessage = (
    <div className="bg-white fixed z-10 w-full h-32  flex flex-col justify-between bottom-0 md:w-80 md:top-6 md:right-24 md:shadow-gray-400 md:shadow-lg lg:w-80 lg:top-6 lg:right-24 lg:shadow-gray-400 lg:shadow-lg">
      <p className=" p-2">
        You have hit the max allowed quantity for this item in your cart{" "}
      </p>
      <button
        onClick={() => setCartQtyError(false)}
        className="bg-black text-white bottom-0 w-full p-5 left-0 cursor-pointer"
      >
        Okay
      </button>
    </div>
  );

  if (!item) return <Error />;

  return (
    <div className="md:flex lg:flex lg:gap-4 relative">
      <Carousel item={item} />
      <div className="px-4 pt-8 lg:w-[900px]">
        <p className="font-semibold text-2xl">{name}</p>
        <p className="text-2xl mb-2">${price}</p>
        <p className="mb-2">Description</p>
        <p className="text-gray-500 mb-8">{description}</p>
        <p className="mb-2">Sizes</p>
        <SizeSelection
          varients={varients}
          setSelectedVarient={setSelectedVarient}
          selectedVarient={selectedVarient}
        />
        <div>
          <button
            onClick={addToCart}
            className="bg-blue-700 text-white p-2 w-full rounded-md lg:w-72"
          >
            Add to cart
          </button>
        </div>
      </div>
      {cartQtyError && maxQuantityInCartMessage}
    </div>
  );
};

export default ItemPage;
