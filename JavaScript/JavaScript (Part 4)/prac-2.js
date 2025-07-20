let todo = [];

let req = prompt("Enter your todo request:");

while (true) {
    if (req === "quit") {
        console.log("Exiting the todo list.");
        break;
    }

    if (req === "list") {
        console.log("-----------Todo List-----------");
        if (todo.length == 0) {
            console.log("No todo items found.");
        } else {
            for (let i = 0; i < todo.length; i++) {
                console.log((i + 1) + ". " + todo[i]);
            }
        }
        console.log("-----------Todo List-----------");
    } else if (req === "add") {
        let task = prompt("Enter the todo item to add:");
        todo.push(task);
        console.log("Todo item added.");
    } else if (req === "delete") {
        let idx = Number(prompt("Enter the index of the todo item to delete:"));
        if (idx > 0 && idx <= todo.length) {
            todo.splice((idx - 1), 1);
            console.log("Todo item deleted.");
        } else {
            console.log("Invalid index! Please try again.");
        }
    } else {
        console.log("Wrong request! Please try again.");
    }

    req = prompt("Enter your todo request:");
}