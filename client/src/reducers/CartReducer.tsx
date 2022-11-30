type Action = {
  type: "ADD_TO_CART";
  payload: CartItem;
};

export const cartReducer = (state: CartState, action: Action) => {
  const id = action.payload.id;

  const size = action.payload.size;

  const itemInCart = state.some((item) => item.id === id && item.size === size);

  const updatedItem = state.map((item) => {
    if (item.id === id && item.size === size) {
      return { ...item, qty: item.qty + 1 };
    }
    return item;
  });

  switch (action.type) {
    case "ADD_TO_CART": {
      if (itemInCart) {
        return updatedItem;
      }
      return [...state, { ...action.payload, qty: 1 }];
    }
  }
};
