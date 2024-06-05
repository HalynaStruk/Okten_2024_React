import PostsComponent from "../components/PostsComponent";
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IPostModel} from "../model/IPostModel";
import {userApiService} from "../services/api.service";

const PostsPage = () => {
    const {id} = useParams()
    // console.log(id);
    const location = useLocation();
    console.log(location);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        if (id) {
        userApiService.getPostsOfUser(id)
            .then(value => setPosts(value.data))
        }
    },[id])
    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;