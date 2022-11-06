import { Link } from "react-router-dom";

type Props = {
  name: string;
  image: string;
  price: number;
  id: string;
};

const Card = ({ name, price, id, image }: Props) => {
  return (
    <Link to={`/shop/item/${id}`}>
      <div className="px-4 max-h-80 w-40 lg:w-56">
        <img src={image} className="w-full h-36 object-cover mb-4 lg:h-36" />
        <p>{name}</p>
        <p className="text-violet-700">
          <strong>{price}</strong>
        </p>
      </div>
    </Link>
  );
};

export default Card;
