import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { ProductCartQuantityReducer } from "./ProductCartQuantityReducer";
const reducers = combineReducers({ allProducts:productReducer, product:selectedProductsReducer, cart:cartReducer, productCartQuantity:ProductCartQuantityReducer

});
export default reducers;
