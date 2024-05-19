import axios, {AxiosResponse} from "axios";
import {IRecipeProps} from "../models/Recipe";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-type': 'application/json'
    }
});

const getAllRecipes = ():Promise<AxiosResponse<IRecipeProps[]>> => {
    return axiosInstance.get('recipes')
}

// Або за допомогою fetch
// const getAllRecipes = () => {
//     return fetch('https://dummyjson.com/recipes')
//         .then(value => value.json())
// }
//
// export {getAllRecipes}

export {getAllRecipes}