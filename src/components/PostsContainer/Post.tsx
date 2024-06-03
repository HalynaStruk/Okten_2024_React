import {FC, PropsWithChildren} from "react";
import {IPost} from "../../interfaces/postInterface";

interface IProps extends PropsWithChildren {
    post:IPost
}

const Post:FC<IProps> = ({post}) => {
    const {id, title, body, userId} = post
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <div>posted by userId: {userId}</div>
            <hr/>
        </div>
    );
};

export {Post};