import {combineReducers} from "redux";
import {productCategoriesReducer} from "./productCategories.reducer";
import {productReducer} from "./product.reducer";

export const rootReducers = combineReducers({
    productCategoriesReducer,
    productReducer
})