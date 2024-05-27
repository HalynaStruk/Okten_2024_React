import React, {useEffect, useState} from "react";

function UseStorage<T>(key: string, storegeValue: T) {

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storegeValue));
    }, [key, storegeValue]);

    const [value, setValue] = useState(() => {
        const item = localStorage.getItem(key)
        if (item != null) setValue(JSON.parse(item))
    })
    return [value, setValue];
}
export default UseStorage;