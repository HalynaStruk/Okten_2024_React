import React, {FC} from "react";
import useStorage from "../hooks/useStorage";

const StoreValue: FC = () => {

    useStorage('user1', {name: 'Ivan', age: 30});

    const item: any = localStorage.getItem('user1');
    let user1 = JSON.parse(item);

    return (
        <div>
            <p><b>Task.3</b> useStorage - hook that allows a component to store a value in the browser's LocalStorage</p>
            {user1.name} {user1.age}
        </div>
    );
};

export default StoreValue;