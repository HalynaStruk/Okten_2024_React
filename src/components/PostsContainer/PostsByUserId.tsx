import {FC} from "react";
import {IPost} from "../../interfaces/postInterface";
import Post from "./Post";

interface IProps {
    posts: IPost[]
}

const PostsByUserId:FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsByUserId;