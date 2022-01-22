import { GET_IMAGES, SET_PRODUCT_LIMIT } from "../Actions/product.action";

const initialState = {
    productLimit: 10,
    products: [],
}

export const productReducer = (state = initialState, action) => {
    switch ( action.type ){
        case GET_IMAGES :
            return {
                ...state,
                products: action.payload
            }
        case SET_PRODUCT_LIMIT :
            return {
                ...state,
                productLimit: action.payload
            }
        default:
            return state
    }
}