import React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersComponent from "../components/UsersComponent";

const routerConfig = createBrowserRouter(
    [
        {
            path:'/',
            element: <MainLayout/>,
            children:[ // child is Outlet
                {index: true, element: <HomePage/>},
                {path:'users', element: <UsersComponent/>}
            ]
        }
    ]
);

export {routerConfig};