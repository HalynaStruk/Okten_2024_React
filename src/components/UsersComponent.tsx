import React, {useEffect, useState} from "react";
import {IUserModel} from "../model/IUserModel";
import {userApiService} from "../services/api.service";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        userApiService.getAllUsers().then(value => setUsers(value.data))
    }, [])

    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}        </div>
    );
};

export default UsersComponent;