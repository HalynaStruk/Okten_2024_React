import {Comments} from "../components/CommentsContainer/Comments";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IComment} from "../interfaces/commentInterface";
import {commentService} from "../services/commentService";

const CommentsPage = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        if (postId) {
        commentService.getAll(postId).then(({data}) => setComments(data));
        }
    },[postId])
    return (
        <div>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsPage};