import { useState } from "react";

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let [clicks, setClicks] = useState(0);

    function toggleLike() {
        setIsLiked(!isLiked);
        setClicks(clicks + 1);
    }

    let styles = {
        color: isLiked ? "red" : ""
    }

    return (
        <div>
            <p>Count = {clicks}</p>
            <h3 onClick={toggleLike} style={styles}>
                {isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
            </h3>
        </div>
    );
}