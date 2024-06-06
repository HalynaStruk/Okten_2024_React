import {IRes} from "../types/resType";
import {IUser} from "../interfaces/userInterface";
import {apiService} from "./apiService";
import {urls} from "../urls/urls";
import {IPost} from "../interfaces/postInterface";

const userService = {
    getAll: (): IRes<IUser[]> => apiService.get(urls.users),
    getPostsByUserId: (userId:string): IRes<IPost[]> => apiService.get(urls.users+'/'+userId+urls.posts)
}

export {
    userService
}