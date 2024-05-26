import React, {useState} from "react";

type UseToggle = [initialValue: boolean, toogleValue: () => void];

export default function useToggle(initialValue: boolean): UseToggle {
    const [value, setValue] = useState<boolean>(initialValue)

    const toogle = (() => {
        setValue((prevValue) => !prevValue);
    })

    return [value, toogle];

 }

