import React, {FC, useEffect, useState} from "react";
import {getAllUsers} from "../../services/dummy.api.service";
import {UserModel} from "../../models/UserModel";
import User from "../User/User";

interface IProps {
    getPostsFromUsers: (id: number) => void
}

const Users: FC<IProps> = ({getPostsFromUsers}) => {

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
                        getPostsFromUsers={getPostsFromUsers}
                        item={value}
                    />
                )
                )
            }
        </div>
    );
};

export default Users;