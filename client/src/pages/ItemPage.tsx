import Error from "./Error";
import { useContext, useId, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { HeaderContext } from "../context/HeaderContext";
import Carousel from "../components/ProductPageCarousel";
import SizeSelection from "../components/SizeSelection";
import { getShopItem } from "../utils/api";

type Varient = {
  size: string;
  stock: number;
};

export const loader = ({ params }: any) => {
  return getShopItem(params.id);
};

const ItemPage = () => {
  const item = useLoaderData() as ShopItem;
  const { dispatch } = useContext(CartContext);
  const { setVisible } = useContext(HeaderContext);
  const [selectedVarient, setSelectedVarient] = useState<Varient | null>(null);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id: item.id, size: selectedVarient?.size },
    });
    setVisible(true);
  };

  if (!item) return <Error />;

  return (
    <div className="md:flex lg:flex lg:gap-4">
      <Carousel item={item} />
      <div className="px-4 pt-8 lg:w-[900px]">
        <p className="font-semibold text-2xl">{item.name}</p>
        <p className="text-2xl mb-2">${item.price}</p>
        <p className="mb-2">Description</p>
        <p className="text-gray-500 mb-8">{item.description}</p>
        <p className="mb-2">Sizes</p>
        <SizeSelection
          item={item}
          setSelectedVarient={setSelectedVarient}
          selectedVarient={selectedVarient}
        />
        <div>
          <button
            onClick={addToCart}
            disabled={!selectedVarient}
            className="bg-blue-700 text-white p-2 w-full rounded-md lg:w-72"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
