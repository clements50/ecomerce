import { useReducer } from "react";
import { v4 as uuid } from "uuid";
import carouselReducer from "../reducers/CarouselReducer";
import CarouselButtons from "../components/CarouselButtons";

type ProductPageCarousel = {
  item: ShopItem;
};

const ProductPageCarousel = ({ item }: ProductPageCarousel) => {
  const [{ index }, dispatch] = useReducer(carouselReducer, { index: 0 });

  const carouselItems = item.images.map((image) => {
    return (
      <div key={uuid()} className="w-full h-full flex-shrink-0">
        <img src={image} className="w-full" />
      </div>
    );
  });

  const imagePositions =
    index === 0
      ? "-translate-x-[0%]"
      : index === 1
      ? "-translate-x-[100%]"
      : index === 2
      ? "-translate-x-[200%]"
      : index === 3 && "-translate-x-[300%]";

  return (
    <div className="md:w-1/2 lg:w-[650px] lg:px-8 flex-shrink-0">
      <div className="w-full overflow-hidden relative flex justify-center">
        <div className={`flex w-full ${imagePositions}`}>{carouselItems}</div>
        <CarouselButtons children={carouselItems} dispatch={dispatch} />
        <div className="absolute w-32 h-8 bottom-0 flex gap-2 justify-center items-center">
          {item.images.map((img, i) => {
            return (
              <div
                key={uuid()}
                className={`h-3 w-3 rounded-full border-2 border-gray-500 cursor-pointer ${
                  index === i && "bg-gray-600"
                }`}
                onClick={() =>
                  dispatch({ type: "set_index", payload: { index: i } })
                }
              ></div>
            );
          })}
        </div>
      </div>
      <div className="py-4 w-full gap-2 hidden md:hidden lg:flex">
        {item.images.map((img, i) => {
          return (
            <div
              onClick={() =>
                dispatch({ type: "set_index", payload: { index: i } })
              }
              key={uuid()}
              className={`${
                index === i && "border-2 border-blue-700"
              } cursor-pointer`}
            >
              <img src={img} className="h-full w-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPageCarousel;
