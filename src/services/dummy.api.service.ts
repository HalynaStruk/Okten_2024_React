import axios, {AxiosResponse} from "axios";
import {UsersResponseModels} from "../models/responseModels/UsersResponseModels";
import {PostModel} from "../models/PostModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});

const getAllUsers = (): Promise<AxiosResponse<UsersResponseModels>> => {
    return axiosInstance.get('/users')
}

const getPostsByUserID = (id: number): Promise<AxiosResponse> => {
    return axiosInstance.get('/users/' + id + '/posts')
}

export {
    getAllUsers,
    getPostsByUserID
}