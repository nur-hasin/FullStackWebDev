import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
    let [logs, setLogs] = useState({blue: [], red: [], yellow: [], green: []});

    let updateBlue = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, blue: prevMoves.blue + 1 }
        });

        setLogs((prevArr) => {
            return {...prevArr, blue: [...prevArr.blue, 'blue moved']};
        });
    };

    let updateYellow = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: prevMoves.yellow + 1 }
        });

        setLogs((prevArr) => {
            return {...prevArr, yellow: [...prevArr.yellow, 'yellow moved']};
        });
    };

    let updateGreen = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, green: prevMoves.green + 1 }
        });

        setLogs((prevArr) => {
            return {...prevArr, green: [...prevArr.green, 'green moved']};
        });
    };

    let updateRed = () => {
        setMoves((prevMoves) => {
            return { ...prevMoves, red: prevMoves.red + 1 }
        });

        setLogs((prevArr) => {
            return {...prevArr, red: [...prevArr.red, 'red moved']};
        });
    };

    return (
        <div>
            <h3>Game Begins</h3>
            <div>
                <p>Blue moves = {moves.blue}</p>
                <p>{logs.blue.join(', ')}</p>
                <button style={{ background: 'blue' }} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <p>{logs.yellow.join(', ')}</p>
                <button style={{ background: 'yellow', color: 'black' }} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <p>{logs.green.join(', ')}</p>
                <button style={{ background: 'green' }} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <p>{logs.red.join(', ')}</p>
                <button style={{ background: 'red' }} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}