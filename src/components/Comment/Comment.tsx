import React, {FC} from "react";
import {PostModel} from "../../models/PostModel";

interface IProps {post: PostModel}

const Comment:FC<IProps> = ({post}) => {
    console.log(post);
    return (
        <div>
            {post.id}
            {post.title}
            {post.body}
            {post.userId}
            {post.tags}
            {post.reactions}
            <hr/>
        </div>
    );
};

export default Comment;