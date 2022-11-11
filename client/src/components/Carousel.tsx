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
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <>
      <div
        className=" h-[50vh] overflow-hidden  mb-16 relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={`w-full h-full bg-gray-40 duration-500 ease-in 
          flex -translate-x-[${index * 100}%]`}
        >
          {children}
        </div>
        <button
          className=" text-3xl absolute top-1/2 right-8 bg-gray-500"
          onClick={() => dispatch({ type: "increment", payload: children })}
        >
          inc
        </button>
        <button
          className="absolute text-2xl left-8 top-1/2 bg-gray-500 "
          onClick={() => dispatch({ type: "decrement", payload: children })}
        >
          dec
        </button>
      </div>
    </>
  );
};

export default Carousel;
