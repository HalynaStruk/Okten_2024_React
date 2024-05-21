import axios, {AxiosResponse} from 'axios';
import {CartsResponseModel} from "../models/responseModels/CartsResponseModel";
import {ProductResponse} from "../models/responseModels/ProductResponse";


let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});

const getAllCarts = ():Promise<AxiosResponse<CartsResponseModel>> => {
    return axiosInstance.get('/carts')
}

const getProductById = (id: number):Promise<AxiosResponse<ProductResponse>> => {
    return axiosInstance.get('/products/' + id)
}

export {
    getAllCarts,
    getProductById
}