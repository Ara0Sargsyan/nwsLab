import axios from "axios";

export const axiosMiddleware = ( method, url ) => {
    const config = {
        method,
        url,
        headers: {
            'Content-Type': 'Application/json'
        }
    }
    return axios(config)
}