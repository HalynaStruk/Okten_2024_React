import {IRes} from "../types/resType";
import {IPost} from "../interfaces/postInterface";
import {apiService} from "./apiService";
import {urls} from "../urls/urls";

const postService =  {
  getAll: ():IRes<IPost[]> => apiService.get(urls.posts)
}

export {
  postService
}