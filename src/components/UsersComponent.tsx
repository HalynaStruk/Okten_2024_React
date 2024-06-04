import React, {useEffect, useState} from "react";
import {IUserModel} from "../model/IUserModel";
import {userApiService} from "../services/api.service";
import {UserComponent} from "./UserComponent";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        userApiService.getAllUsers().then(value => setUsers(value.data))
    }, [])

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;