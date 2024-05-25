import React, {FC} from "react";
import {PostModel} from "../../models/PostModel";

interface IProps { post: PostModel}

const Comment:FC<IProps> = ({post}) => {
    console.log(post);
    return (
    <div>
        <h3>{post.id}. {post.title}</h3>
        <p>{post.body}</p>
        <h4>posted by user {post.userId}</h4>
        <ul>{post.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
        {/*<p>{post.reactions}</p>*/}
        <hr/>
    </div>

    );
};

export default Comment;