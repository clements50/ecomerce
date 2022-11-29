import Error from "./Error";
import { useId, useState } from "react";
import { useRouteLoaderData, useParams } from "react-router-dom";

type Varient = {
  size: string;
  stock: number;
};

const ItemPage = () => {
  const items = useRouteLoaderData("root") as ShopItem[];
  const { id } = useParams();
  const item = items.find((item) => item.id === id);

  const [selectedVarient, setSelectedVarient] = useState<Varient>();

  const sizeChoices =
    item?.varients.length != 0 &&
    item?.varients.map((varient) => {
      return (
        <button
          key={useId()}
          onClick={() => setSelectedVarient(varient)}
          className={`flex items-center justify-center p-2 border-gray-400 border-2 rounded-md ${
            varient.stock < 1 && "bg-gray-200"
          }`}
          disabled={varient.stock < 1}
        >
          {varient.size}
        </button>
      );
    });

  if (!item) return <Error />;

  return (
    <div className="md:flex lg:flex lg:gap-4">
      <div className="md:w-1/2 lg:w-[700px] overflow-hidden flex-shrink-0">
        <div className="flex w-full">
          {item.images.images.map((image) => {
            return (
              <div key={useId()} className="w-full h-full flex-shrink-0">
                <img src={image} className="w-full" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-4 pt-8 lg:w-[900px]">
        <p className="font-semibold text-2xl">{item.name}</p>
        <p className="text-2xl mb-2">${item.price}</p>
        <p className="mb-2">Description</p>
        <p className="text-gray-500 mb-8">{item.description}</p>
        <p className="mb-2">Sizes</p>
        <div className="grid grid-cols-4 gap-1 mb-8">{sizeChoices}</div>
        <div className="flex gap-4">
          <button className="bg-blue-700 text-white p-2 w-full rounded-md lg:w-72">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
