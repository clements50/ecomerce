import { useLoaderData } from "react-router-dom";
import items from "../data/data.json";

export const loader = ({ params }: any) => {
  const item = items.find((item) => item.id === params.id);

  return item;
};

const ItemPage = () => {
  const item: ShopItem = useLoaderData() as ShopItem;

  return (
    <div className="py-8 px-8">
      <div>{item.name}</div>
    </div>
  );
};

export default ItemPage;
