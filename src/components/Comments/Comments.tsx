import React, {FC, useEffect, useState} from "react";
import {getPostsByUserID} from "../../services/dummy.api.service";
import {PostModel} from "../../models/PostModel";
import Comment from "../Comment/Comment";

interface IProps {
    id: number
}
interface ICommentsProps {posts: PostModel[]}
const Comments: FC<IProps> = ({id: userId}) => {

    const [posts, setPosts] = useState<PostModel[]>([])
    useEffect(() => {
        getPostsByUserID(userId).then(({data: {posts}}) => {
            setPosts(posts);
        })
    }, [userId])

    return (
        <div>
            {
                posts && posts.map((post, index) => (<Comment key={index} post={post}/>))
            }
        </div>
    );
};

export default Comments;