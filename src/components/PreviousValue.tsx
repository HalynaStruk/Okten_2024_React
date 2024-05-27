import React, {FC, useState} from "react";
import usePrevious from "../hooks/usePrevious";

const PreviousValue: FC = () => {
    const [count, setCount] = useState(10);
    const prevCount = usePrevious(count);

    return (
        <div>
            <p><b>Task 2.</b> usePrevious - hook that allows a component to keep track of the previous value of a variable</p>
            <p>Current count: {count}</p>
            <p>Previous count: <b>{prevCount}</b></p>
            <button onClick={() => setCount(count + 5)}>Increment</button>
        </div>
    );
}

export default PreviousValue;