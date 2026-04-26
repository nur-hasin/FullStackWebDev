import { useState, useEffect } from "react";

export default function Joker() {
    const URL = "https://official-joke-api.appspot.com/random_joke";
    let [joke, setJoke] = useState({});

    const getNewJoke = async () => {
        const response = await fetch(URL);
        const joke = await response.json();

        setJoke({ setup: joke.setup, punchline: joke.punchline });
    };

    useEffect(() => {
        const getNewJoke = async () => {
            const response = await fetch(URL);
            const joke = await response.json();

            setJoke({ setup: joke.setup, punchline: joke.punchline });
        };
        getNewJoke();
    }, []);

    return (
        <div>
            <h1>Joker</h1>
            <button onClick={getNewJoke}>
                New Joke
            </button>
            <h3>{joke.setup}</h3>
            <h4>{joke.punchline}</h4>
        </div>
    );
}