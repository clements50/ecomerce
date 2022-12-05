import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
const CarouselButtons = ({ children, dispatch }: any) => {
  return (
    <>
      <FaChevronCircleRight
        className=" text-2xl absolute top-1/2 right-4 bg-gray-100 rounded-full h-8 w-8 cursor-pointer"
        onClick={() => dispatch({ type: "increment", payload: children })}
      >
        &rarr;
      </FaChevronCircleRight>
      <FaChevronCircleLeft
        className="absolute text-2xl left-4 top-1/2 bg-gray-100 rounded-full h-8 w-8 cursor-pointer"
        onClick={() => dispatch({ type: "decrement", payload: children })}
      >
        &larr;
      </FaChevronCircleLeft>
    </>
  );
};

export default CarouselButtons;
