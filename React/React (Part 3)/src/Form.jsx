function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Enter something" />
            <button type="submit">Submit</button>
        </form>
    );
}