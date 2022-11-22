import Error from "./Error";
import { useRouteLoaderData, useParams } from "react-router-dom";

const ItemPage = () => {
  const items = useRouteLoaderData("root") as ShopItem[];
  const { id } = useParams();
  const item = items.find((item) => item.id === id);

  if (!item) return <Error />;

  return (
    <div className="py-8 px-4">
      <div>
        <img
          src={"../../public/" + item.image}
          className="h-60 rounded-md mb-4 w-full object-cover"
        />
        <div className="mb">
          <p className="text-black text-lg mb-4">{item.name}</p>
          <button className="bg-blue-700 text-white rounded-md p-2 w-full mb-8">
            Add to cart
          </button>
          <p className="mb-4">Description</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
