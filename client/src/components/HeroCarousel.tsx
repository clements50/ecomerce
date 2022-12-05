import React, { useEffect, useReducer, useState } from "react";
import CarouselReducer from "../reducers/CarouselReducer";
import CarouselButtons from "./CarouselButtons";
import { v4 as uuid } from "uuid";

type CarouselProps = {
  children: React.ReactElement[];
};

const Carousel = ({ children }: CarouselProps) => {
  const [{ index }, dispatch] = useReducer(CarouselReducer, { index: 0 });
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

  const CarouselItems = children.map((child) => {
    return (
      <div key={uuid()} className="h-full w-full bg-gray-200 flex-shrink-0">
        {child}
      </div>
    );
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
          {CarouselItems}
        </div>
        <CarouselButtons children={children} dispatch={dispatch} />
      </div>
    </>
  );
};

export default Carousel;
