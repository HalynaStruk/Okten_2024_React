import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import {CommentsPage} from "./pages/CommentsPage";
import PostsByUserIdPage from "./pages/PostsByUserIdPage";

const router = createBrowserRouter([
    {
        path:'',
        element: <MainLayout/>,
        errorElement: <h1>This page does not exist</h1>,
        children: [
            {index: true, element:<Navigate to={'users'}/>},
            {path:'users', element: <UsersPage/>,
                children:[
                    {path:':id', element:<PostsByUserIdPage/>,
                        children:[
                            {path: ':postId', element: <CommentsPage/>}
                        ]
                    }
                ]
            },
            {path:'posts', element: <PostsPage/>,
                children:[
                    {path: ':postId', element: <CommentsPage/>}
                ]
            },
            // {path:'comments', element: <CommentsPage/>}
        ]
    }
]);

export {
    router
}