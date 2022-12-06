import { HiOutlineX } from "react-icons/hi";
import { AiFillClockCircle } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

type CartItemProps = {
  name: string;
  price: number;
  size: string;
  qty: number;
  stock: number;
  id: string;
  img: string;
};

const CartItem = (props: CartItemProps) => {
  const { name, price, size, qty, stock, id, img } = props;
  const { dispatch } = useContext(CartContext);

  return (
    <div className="flex gap-3 py-4 border-b-2 border-b-gray-200">
      <img src={img} className="w-28 h-28 flex-grow-0" />
      <div className="w-full">
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-sm">{name}</p>
          <HiOutlineX
            className="text-gray-700 cursor-pointer"
            onClick={() =>
              dispatch({
                type: "DELETE_ITEM",
                payload: { id: id, size: size },
              })
            }
          />
        </div>
        <p className="text-gray-600 text-sm">size {size}</p>
        <p>${price}</p>

        <div className="flex flex-col lg:justify-between lg:flex-row-reverse">
          <select
            onChange={(e) =>
              dispatch({
                type: "UPDATE_QTY",
                payload: {
                  id: id,
                  size: size,
                  updatedQty: parseInt(e.target.value),
                },
              })
            }
            defaultValue={qty}
            className="bg-white border-2 border-gray-200 p-1 my-3 rounded-md text-sm w-fit"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>

          {qty > stock ? (
            <div className="flex items-center gap-2">
              <p>
                <AiFillClockCircle className="text-gray-400 h-4 w-4" />
              </p>
              {"  "}
              <p className="text-gray-500">
                Ships in <span className="text-gray-700">3 weeks</span>
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <BiCheck className="text-green-600 h-5 w-5" />
              <p className="text-gray-500">in stock</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
