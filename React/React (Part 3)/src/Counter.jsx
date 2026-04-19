import { useState } from "react";

function init() {
    console.log("initialized");
    return Math.floor(Math.random() * 100 + 1);
}

export default function Counter() {
    let [count, setCount] = useState(init);
    console.log("rendered");
    console.log(`outer ${count}`);

    function incCount() {        
        // setCount(count + 1);
        setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount + 1);
        // setCount(25);
        console.log(`inner ${count}`);
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increment</button>
        </div>
    );
}
