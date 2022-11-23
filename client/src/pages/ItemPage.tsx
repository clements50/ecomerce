import Error from "./Error";
import { useRouteLoaderData, useParams } from "react-router-dom";

const ItemPage = () => {
  const items = useRouteLoaderData("root") as ShopItem[];
  const { id } = useParams();
  const item = items.find((item) => item.id === id);

  if (!item) return <Error />;

  return (
    <div className="py-8 px-7 flex flex-wrap gap-8 lg:flex-nowrap lg:justify-center">
      <img src={"/" + item.image} className=" rounded-md" />
      <div className="lg:w-1/2">
        <div className="flex justify-between text-xl font-semibold">
          <p className="text-black mb-4">{item.name}</p>
          <p>${item.price}</p>
        </div>
        <button className="bg-blue-700 text-white rounded-md p-2 w-full mb-8">
          Add to cart
        </button>
        <p className="mb-4">Description</p>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </div>
  );
};

export default ItemPage;
