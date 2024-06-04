import {useEffect, useState} from "react";
import {IComment} from "../../interfaces/commentInterface";
import {commentService} from "../../services/commentService";
import {Comment} from "./Comment";
import {SubmitHandler, useForm} from "react-hook-form";

type IProps = {
    postId: number;
};

const Comments = () => {
    let {register, handleSubmit} = useForm<IProps>();
    const onSubmit: SubmitHandler<IProps> = (data) => {
        commentService.getAll(data.postId).then(({data}) => setComments(data));
    }
    const [comments, setComments] = useState<IComment[]>([]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Enter postId number to see comments</p>
                <input type="number" {...register('postId')}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};