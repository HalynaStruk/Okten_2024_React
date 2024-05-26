import React, {FC, useRef, useState} from "react";
import {UserModel} from "../../models/UserModel";
import Comments from "../Comments/Comments";

type IProps = { item: UserModel}

const User: FC<IProps> = ({item}) => {

     const postsDetail = () => {
         getPostsFromUsers(item.id);
     }

    const [userId, setUserId] = useState<number | null>(null)
    //
    const getPostsFromUsers = (id: number) => {
        setUserId(id)
    }

    return (
        <div>
            <h2>{item.id}. {item.firstName} {item.lastName}</h2>
            <p>{item.gender} {item.age} years old</p>
            <h3>phone: {item.phone}</h3>
            <h3>email: {item.email}</h3>
            <img src={item.image} alt="user icon"/>
            <br/>
            <button onClick={postsDetail}>Get user's posts</button>
            <hr/>
            <Comments userId={userId}/>
        </div>
    );
};

export default User;