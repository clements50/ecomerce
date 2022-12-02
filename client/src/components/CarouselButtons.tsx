const CarouselButtons = ({ children, dispatch }: any) => {
  return (
    <>
      <button
        className=" text-2xl absolute top-1/2 right-4 bg-gray-100 rounded-full h-8 w-8"
        onClick={() => dispatch({ type: "increment", payload: children })}
      >
        &rarr;
      </button>
      <button
        className="absolute text-2xl left-4 top-1/2 bg-gray-100 rounded-full h-8 w-8 "
        onClick={() => dispatch({ type: "decrement", payload: children })}
      >
        &larr;
      </button>
    </>
  );
};

export default CarouselButtons;
