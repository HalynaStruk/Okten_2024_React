import React, {FC} from "react";
import useToggle from "../hooks/useToggle";

const ToggleComponent: FC = () => {

    const [isToggled, toggle] = useToggle(false);

    return (
        <div>
            <p><b>Task 1.</b> useToggle - custom React hook that allows a component to toggle a value between true and false
                import useState from react</p>
            <p>The current value is <b>{isToggled.toString()}</b></p>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
}

export default ToggleComponent;
