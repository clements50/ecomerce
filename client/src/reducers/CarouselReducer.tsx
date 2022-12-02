import React from "react";

type Children = React.ReactNode;

type Action =
  | { type: "increment"; payload: Children }
  | { type: "decrement"; payload: Children }
  | { type: "set_index"; payload: { index: number } };

type State = {
  index: number;
};

const CarouselReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      if (state.index >= React.Children.count(action.payload) - 1) {
        return { index: 0 };
      }
      return { index: state.index + 1 };
    case "decrement":
      if (state.index <= 0) {
        return { index: React.Children.count(action.payload) - 1 };
      }
      return { index: state.index - 1 };
    case "set_index":
      return { index: action.payload.index };
  }
};

export default CarouselReducer;
