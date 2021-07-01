import { ActionTypes } from "./../Types";
const initState = { cartItems: [] };

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return { cartItems: [...state.cartItems, payload] };

    case ActionTypes.REMOVE_TO_CART:
      //   return [...state, state.cart.filter((id) => id !== payload)]
      return {...state, cartItems : [...state.cartItems.filter((item => item.id !== payload))]}

    default:
      return state;
  }
};
