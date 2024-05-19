import React, {FC} from "react";

let users = [
    {name: 'vasyl', age: 31, status: false},
    {name: 'petro', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andriy', age: 29, status: true},
    {name: 'maria', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const UserComponent:FC<any> = ({lift}) => {
    console.log(lift);
    return (
        <div style={{border: '1px solid'}}>
            {
                users.map((user,index) => (<div key={index}>{user.name}
                    <button onClick={() => {
                        lift(user);
                    }}>xxx</button>
                </div>))
            }
        </div>
    );
};

export {UserComponent};