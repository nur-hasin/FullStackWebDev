import { useState, useEffect } from 'react';

export default function Counter() {
    const [countx, setCountx] = useState(0);
    const [county, setCounty] = useState(0);

    let incCountx = () => {
        setCountx(prevCount => prevCount + 1);
    }

    let incCounty = () => {
        setCounty(prevCount => prevCount + 1);
    }

    // useEffect(() => {
    //     console.log("Count has been updated to: " + countx);
    // }, [countx]);

    // useEffect(() => {
    //     console.log("Count has been updated to: " + countx);
    // }, [countx, county]);

    useEffect(() => {
        console.log("Count has been updated to: " + countx);
    }, []);

    return (
        <div>
            <p>Count = {countx}</p>
            <button onClick={incCountx}>
                Increment
            </button>
            <p>Count = {county}</p>
            <button onClick={incCounty}>
                Increment
            </button>
        </div>
    );
}