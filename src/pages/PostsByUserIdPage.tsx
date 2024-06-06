import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IPost} from "../interfaces/postInterface";
import {userService} from "../services/userService";
import PostsByUserId from "../components/PostsContainer/PostsByUserId";

const PostsByUserIdPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        if (id) {
        userService.getPostsByUserId(id).then(value => setPosts(value.data))
        }
    },[id])

    return (
        <div>
            <PostsByUserId posts={posts}/>
            <Outlet/>
        </div>
    );
};

export default PostsByUserIdPage;