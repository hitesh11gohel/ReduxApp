import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
const reducers = combineReducers({ allProducts:productReducer, product:selectedProductsReducer, cart:cartReducer});
export default reducers;
