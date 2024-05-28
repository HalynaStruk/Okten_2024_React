import React, {useEffect, useState} from "react";

function useStorage<T>(key: string, storageValue: T): any {

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storageValue));
    }, [key, storageValue]);

}

export default useStorage;