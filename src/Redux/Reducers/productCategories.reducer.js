import {SET_ACTIVE_CATEGORY, SET_PRODUCT_CATEGORIES} from "../Actions/productCategories.action";

const initialState = {
    activeCategory: "",
    categories: []
}

export const productCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case SET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: action.payload
            }
        default:
            return state
    }
}