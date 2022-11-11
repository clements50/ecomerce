import React, { useEffect, useReducer, useState } from "react";
import { reducer } from "../reducers/CarouselReducer";

type CarouselProps = {
  children: React.ReactNode;
};

const Carousel = ({ children }: CarouselProps) => {
  const [{ index }, dispatch] = useReducer(reducer, { index: 0 });
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        dispatch({ type: "increment", payload: children });
      }
    }, 2000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <>
      <div
        className=" h-[30vh] lg:h-[50vh] overflow-hidden  mb-8 relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={`w-full h-full bg-gray-40 duration-1000 ease-in 
          flex ${
            index === 0
              ? "-translate-x-0"
              : index === 1
              ? "-translate-x-full"
              : "-translate-x-[200%]"
          }`}
        >
          {children}
        </div>
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
      </div>
    </>
  );
};

export default Carousel;
