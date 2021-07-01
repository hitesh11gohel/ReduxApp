import { ActionTypes } from "./../Types";
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: products });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  const product = response.data;
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: product });
};

export const setProducts = (products) => {
  return { type: ActionTypes.SET_PRODUCTS, payload: products };
};

export const selectedProduct = (product) => {
  return { type: ActionTypes.SELECTED_PRODUCT, payload: product };
};

export const removeSelectedProduct = () => {
  return { type: ActionTypes.REMOVE_SELECTED_PRODUCT };
};

export const addToCart = (cart) => {
  return { type: ActionTypes.ADD_TO_CART, payload: cart };
};

export const removeToCart = (removedItem) => {
  return { type: ActionTypes.REMOVE_TO_CART, payload: removedItem };
};