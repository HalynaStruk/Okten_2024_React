import axios, {AxiosResponse} from "axios";
import {IProps} from "../components/FormPostComponent";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
});

const postService =  {

    postSave: (post: IProps): Promise<AxiosResponse> => {
        return axiosInstance.post(`/posts`, post)
    }
}

export {postService}