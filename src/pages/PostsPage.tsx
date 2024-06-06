import Posts from "../components/PostsContainer/Posts";
import {Outlet} from "react-router-dom";
import css from './Posts.module.css';

const PostsPage = () => {
    return (
        <div className={css.PostsContainer}>
            <Posts/>
            <div className={css.CommentsContainer}>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsPage;