import axios from "axios";
import {AuthDataModel} from "../models/AuthDataModel";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});

const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        const response = await axiosInstance.post('/auth', authData)
        return !!(response.data.access && response.data.refresh);
    },
    refresh: () => {}

}

export {
    authService
}