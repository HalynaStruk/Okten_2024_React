import React, {FC, useEffect, useState} from "react";
import {getAllUsers} from "../../services/dummy.api.service";
import {UserModel} from "../../models/UserModel";
import User from "../User/User";

const Users: FC = () => {

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
                    />
                ))
            }
        </div>
    );
};

export default Users;