type CartItem = {
  name: string;
  size: string;
  price: number;
  stock: number;
  id: string;
  img: string;
  qty: number;
};

export type Action =
  | {
      type: "ADD_TO_CART";
      payload: {
        name: string;
        size: string;
        price: number;
        stock: number;
        id: string;
        img: string;
      };
    }
  | {
      type: "UPDATE_QTY";
      payload: {
        id: string;
        updatedQty: number;
        size: string;
      };
    }
  | {
      type: "DELETE_ITEM";
      payload: {
        id: string;
        size: string;
      };
    };

export const cartReducer = (state: CartItem[], action: Action) => {
  const itemInCart = state.some(
    (item) => item.id === action.payload.id && item.size === action.payload.size
  );
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedItem = state.map((item) => {
        if (
          item.id === action.payload.id &&
          item.size === action.payload.size
        ) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });

      if (itemInCart) {
        return updatedItem;
      }
      return [...state, { ...action.payload, qty: 1 }];
    }

    case "UPDATE_QTY": {
      const updatedItem = state.map((item) => {
        if (
          item.id === action.payload.id &&
          item.size === action.payload.size
        ) {
          return { ...item, qty: action.payload.updatedQty };
        }
        return item;
      });

      if (itemInCart) {
        return updatedItem;
      }
    }
    case "DELETE_ITEM": {
      const updatedCart = state.filter(
        (item) =>
          item.id != action.payload.id && item.size != action.payload.size
      );
      return updatedCart;
    }
  }
};
