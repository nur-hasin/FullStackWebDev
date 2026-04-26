import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm.jsx";

export default function Comment() {
    let [comments, setComments] = useState([{
        username: "nha",
        remarks: "great product",
        rating: 5
    }]);

    let addNewComment = (newComment) => {
        setComments((prevComments) => {
            return [...prevComments, newComment]
        });
    }

    return (
        <div>
            <CommentsForm addNewComment={addNewComment} />
            <h3>All Comments</h3>
            {comments.map((comment, idx) => (
                <div key={idx} className="comment">
                    <p>
                        <b>@{comment.username}</b>
                        <br />
                        {comment.remarks}
                    </p>
                    <p>Rating: {comment.rating}/5</p>
                </div>
            ))}
        </div>
    );
}