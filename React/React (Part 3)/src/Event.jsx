function handleClick(event) {
    console.log(event);
    console.log("Hello");
}

function handleMouseOver() {
    console.log("bye");
}

function handleDblClick() {
    console.log("you clicked me twice");
}

export default function Event() {
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <p onMouseOver={handleMouseOver}>Hover over me</p>
            <button onDoubleClick={handleDblClick}>Double click me</button>
        </div>
    );  
}
