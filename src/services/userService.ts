import {IRes} from "../types/resType";
import {IUser} from "../interfaces/userInterface";
import {apiService} from "./apiService";
import {urls} from "../urls/urls";

const userService = {
    getAll: (): IRes<IUser[]> => apiService.get(urls.users)
}

export {
    userService
}