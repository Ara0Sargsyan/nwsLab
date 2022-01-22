import { GET_CATEGORIES_URL } from "../../config/apiUrls"
import { axiosMiddleware } from "./cammon.action"

export const SET_PRODUCT_CATEGORIES = "SET_PRODUCT_CATEGORIES"
export const SET_ACTIVE_CATEGORY = "SET_ACTIVE_CATEGORY"

export const setActiveCategory = payload => {
    return {type: SET_ACTIVE_CATEGORY, payload}
}

export const setProductCategories = payload => {
    return {type: SET_PRODUCT_CATEGORIES, payload}
}

export const getCategoriesThunk = () => {
    return async dispatch => {
        try {
            const url = GET_CATEGORIES_URL()
            const response = await axiosMiddleware("GET",url)
            dispatch(setProductCategories(response.data))
        } catch ( err ) {
            throw err
        }
    }
}
