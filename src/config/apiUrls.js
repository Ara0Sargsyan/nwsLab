export const GET_CATEGORIES_URL = () => {
    return `https://api.thecatapi.com/v1/categories`
}
export const GET_IMAGES_URL = (category_id, limit, page) => {
    return `https://api.thecatapi.com/v1/images/search?limit=${limit || 10}&page=${page || 1}&category_ids=${category_id || 1}`
}