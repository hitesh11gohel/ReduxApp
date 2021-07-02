import { ActionTypes } from "./../Types";
const cartInitState = { cartItems: [] };

export const cartReducer = (state = cartInitState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      let check = state.cartItems.find((item) => item.id === payload.id);
      if (check) {
        let index = state.cartItems.findIndex((item) => item.id === payload.id);
        check.quantity = payload.quantity;
        check.price = payload.price;
        state.cartItems[index] = check;
        return state;
      } else {
        return { ...state, cartItems: [...state.cartItems, payload] };
      }


    case ActionTypes.REMOVE_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems.filter((item) => item.id !== payload)],
      };

    default:
      return state;
  }
};
