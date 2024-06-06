import {Comment} from "./Comment";
import {FC} from "react";
import {IComment} from "../../interfaces/commentInterface";

type IProps = {
    comments: IComment[];
};

const Comments:FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};