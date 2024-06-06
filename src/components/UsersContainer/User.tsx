import {FC, PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import {IUser} from "../../interfaces/userInterface";
import css from './User.module.css';

interface IProps extends PropsWithChildren {
    user:IUser
}

const User: FC<IProps> = ({user}) => {
    const{id, name, username, email} = user
    return (
        <div className={css.UserContainer}>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <Link to={user.id.toString()}>Posts detail</Link>
            <hr/>
        </div>
    );
};

export default User;