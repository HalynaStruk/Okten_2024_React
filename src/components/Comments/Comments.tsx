import React, {FC, useEffect, useState} from "react";
import {getPostsByUserID} from "../../services/dummy.api.service";
import {PostModel} from "../../models/PostModel";
import Comment from "../Comment/Comment";

interface IProps {
    userId: number
}
const Comments: FC<IProps> = ({userId}) => {

    const [posts, setPosts] = useState<PostModel[]>([])
    useEffect(() => {
        // getPostsByUserID(userId).then(({data: {posts}}) => {
        //     setPosts(posts);
        getPostsByUserID(userId).then((value) => {
            console.log(value);
            // setPosts(posts);
            // console.log(posts);
        })
    }, [userId])
    console.log(posts);
    return (
        <div>
            {
                // posts.map((post, index) => (<Comment key={index} post={post}/>))
            }
        </div>
    );
};

export default Comments;