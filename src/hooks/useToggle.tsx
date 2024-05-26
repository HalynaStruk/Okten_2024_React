import React, {FC, useState} from "react";

export default function useToggle(initialValue: boolean) {
    const [value, setValue] = useState<boolean>(initialValue)

    function toogleValue() {
        setValue((prevValue) => !prevValue)
    }
    return [value, toogleValue]
}
