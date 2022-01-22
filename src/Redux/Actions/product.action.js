import { axiosMiddleware } from "./cammon.action";
import { GET_IMAGES_URL } from "../../config/apiUrls";

export const GET_IMAGES = "GET_IMAGES"
export const SET_PRODUCT_LIMIT = "SET_PRODUCT_LIMIT"



export const getProducts = (payload) => {
    return {
        type: GET_IMAGES,
        payload
    }
}


export const setProductLimit = (payload) => {
    return {
        type: SET_PRODUCT_LIMIT,
        payload
    }
}

export const getImagesThunk = (category_id, limit) => {
    return async dispatch => {
        try {
            const url = GET_IMAGES_URL(category_id, limit)
            const response = await axiosMiddleware("GET",url)
            dispatch(getProducts(response.data))
        } catch ( err ) {
            throw err
        }
    }
}