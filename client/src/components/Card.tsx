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
      <div className="px-4 lg:w-56">
        <img src={thumbnail} className="h-32 object-cover mb-4 lg:h-36" />
        <p>
          <strong>{name}</strong>
        </p>
        <p className="text-gray-600">${price}</p>
      </div>
    </Link>
  );
};

export default Card;
