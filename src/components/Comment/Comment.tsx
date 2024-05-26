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
        <ul><b>Tags:</b>{post.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
        <ul><b>Reactions:</b> {Object.entries(post.reactions).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>))}</ul>
        <hr/>
    </div>

    );
};

export default Comment;