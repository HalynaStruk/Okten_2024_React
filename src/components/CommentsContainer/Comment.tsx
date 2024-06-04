import {FC, PropsWithChildren} from "react";
import {IComment} from "../../interfaces/commentInterface";

interface IProps extends PropsWithChildren {
    comment:IComment
}

const Comment:FC<IProps> = ({comment}) => {
    const {body, email, id, name, postId} = comment
    return (
        <div>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <hr/>
        </div>
    );
};

export {Comment};