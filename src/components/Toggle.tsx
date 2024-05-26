import React, {FC} from "react";
import useToggle from "../hooks/useToggle";

const ToggleComponent: FC = () => {

    const [isToggled, toggle] = useToggle(false);

    return (
        <div>
            <p>The current value is {isToggled.toString()}</p>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
}

export default ToggleComponent;
