import { Link } from "react-router-dom";

type Props = {
  name: string;
  thumbnail: string;
  price: number;
  id: string;
};

const Card = ({ name, price, id, thumbnail }: Props) => {
  return (
    <Link to={`/shop/items/${id}`}>
      <div className="">
        <img src={thumbnail} className="h-32 w-full mb-4 lg:h-36" />
        <p className="text-gray-700">{name}</p>
        <p className="">${price}</p>
      </div>
    </Link>
  );
};

export default Card;
