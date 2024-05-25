import React from "react";
import useToggle from "../hooks/useToggle";

const ToggleComponent: React.FC = () => {
    // Використовуємо хук useToggle
    const [isToggled, toggle] = useToggle();

    return (
        <div>
            <p>The current value is {isToggled.toString()}</p>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
}

export default ToggleComponent;
