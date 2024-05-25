import React, {FC, useState} from "react";
import {UserModel} from "../../models/UserModel";
import {PostModel} from "../../models/PostModel";

type IProps = { item: UserModel, getPostsFromUsers: (id: number) => void }

const User: FC<IProps> = ({item, getPostsFromUsers}) => {

     const postsDetail = () => {
         getPostsFromUsers(item.id);
         console.log(item.id);
     }
    // const [userId, setUserId] = useState<number | null>(null)
    //
    // const getPostsFromUsers = (id: number) => {
    //     console.log(id);
    //     setUserId(id)
    // }
    // console.log(userId);
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
        </div>
    );
};

export default User;