import React, {FC} from "react";
import UseStorage from "../hooks/useStorage";

const StoreValue: FC = () => {

       UseStorage('user1', {name: 'ivan', age: 30});
    // UseStorage('user2', {name: 'maksym', age: 25});
    // UseStorage('user3', {name: 'maria', age: 25});

    return (
        <div>

        </div>
    );
};

export default StoreValue;