import { ActionTypes } from "./../Types";

const initState = {
  id: 0,
  title: "",
  quantity: 1,
  price: 0,
  total: 0,
};

export const ProductCartQuantityReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_PRODUCT:
      const { id, title, price } = action.payload;
      state.total = price;
      return { ...state, id, title, price };

    case ActionTypes.ADD_QUANTITY:
      let qty = state.quantity + 1;
      state.total = qty * state.price;
      return { ...state, quantity: qty };

    default:
      return state;
  }
};
