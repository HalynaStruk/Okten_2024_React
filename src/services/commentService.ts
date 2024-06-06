import {IComment} from "../interfaces/commentInterface";
import {IRes} from "../types/resType";
import {apiService} from "./apiService";
import {urls} from "../urls/urls";

const commentService = {
    getAll: (postId:string):IRes<IComment[]> => apiService.get(urls.posts+'/'+postId+urls.comments)
}

export {
    commentService
}