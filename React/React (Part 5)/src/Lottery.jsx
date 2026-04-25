import { useState } from "react";
import { genRandomNum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition }) {
    let [ticket, setTicket] = useState(genRandomNum(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genRandomNum(n));
    }

    return (
        <div>
            <h3>Lottery Game</h3>
            <Ticket ticket={ticket} />
            <Button action={buyTicket} />
            <h4>
                {isWinning && "Congratulations, you won!"}
            </h4>
        </div>
    );
}