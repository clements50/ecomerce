import Error from "./Error";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

export const loader = ({ params }: any) => {
  return params.id;
};

const ItemPage = () => {
  const items: ShopItem[] = useRouteLoaderData("root") as ShopItem[];
  const params = useLoaderData();
  const item = items.find((item) => item.id === params);

  if (!item) return <Error />;

  return (
    <div className="py-8 px-8">
      <div>{item.name}</div>
    </div>
  );
};

export default ItemPage;
