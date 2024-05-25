import React, {FC, useEffect, useState} from "react";
import {getAllUsers} from "../../services/dummy.api.service";
import {UserModel} from "../../models/UserModel";
import User from "../User/User";
import Comments from "../Comments/Comments";

interface IProps {
    getPostsFromUsers: (id: number) => void
}

const Users: FC<IProps> = () => {

    const [userId, setUserId] = useState<number | null>(null)

    const getPostsFromUsers = (id: number) => {
        console.log(id);
        setUserId(id)
    }
    console.log(userId);

    const [users, setUsers] = useState<UserModel[]>([]);

    useEffect(() => {
        getAllUsers().then(({data: {users}}) => setUsers(users))
    }, []);

    return (
        <div>
            {
                users.map(value => (
                    <User
                        key={value.id}
                        item={value}
                        getPostsFromUsers={getPostsFromUsers}
                    />
                ))

            }
            <Comments userId={userId}/>
        </div>
    );
};

export default Users;