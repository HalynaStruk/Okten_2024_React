import React, {FC, useEffect, useState} from "react";
import {PostModel} from "../../models/PostModel";
import Comment from "../Comment/Comment";
import {getPostsByUserID} from "../../services/dummy.api.service";

interface IProps {
    userId: number
}

const Comments: FC<IProps> = ({userId}) => {

    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        if (!userId) return;
        getPostsByUserID(userId).then(({data: {posts}}) => {
        setPosts(posts);
        })
    }, [userId])

    return (
        <div>
            {
                posts.map((post, index) => (<Comment key={index} post={post}/>))
            }
        </div>
    );
};

export default Comments;