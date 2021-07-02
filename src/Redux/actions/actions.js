import { ActionTypes } from "./../Types";
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: products });
};

export const selectedProduct = (id) => async (dispatch) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  const product = response.data;
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: product });
};

export const setProducts = (products) => {
  return { type: ActionTypes.SET_PRODUCTS, payload: products };
};

export const removeSelectedProduct = () => {
  return { type: ActionTypes.REMOVE_SELECTED_PRODUCT };
};

export const addToCart = (id, cart) => {
  return { type: ActionTypes.ADD_TO_CART, payload: id, cart };
};

export const removeToCart = (removedItem) => {
  return { type: ActionTypes.REMOVE_TO_CART, payload: removedItem };
};

export const addQuantity = (quantity, total) => {
  return { type: ActionTypes.ADD_QUANTITY, payload: quantity, total };
};

export const addProductWithQuantity = (product) => {
  return {type:ActionTypes.ADD_TO_PRODUCT, payload: product}
}
