import React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import {UsersPage} from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";

const routerConfig = createBrowserRouter(
    [
        {
            path:'/',
            element: <MainLayout/>,
            errorElement: <h1>this page does not exist</h1>,
            children: [ /*child is - Outlet in your layout*/
                {index: true, element: <HomePage/>},
                {
                    path: 'users', element: <UsersPage/>,
                    children: [
                        {path: ':id', element: <PostsPage/>}
                    ]
                },

            ]
        },
]);

export {routerConfig};