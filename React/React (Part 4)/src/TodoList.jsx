import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [tasks, setTasks] = useState([{ todo: 'sample task', id: uuidv4(), isDone: false }]);
    let [newTask, setNewTask] = useState('');

    let addNewTask = () => {
        setTasks((prevTasks) => {
            return [...prevTasks, {
                todo: newTask, id: uuidv4(), isDone: false
            }];
        });
        setNewTask('');
    }

    let updateTaskValue = (event) => {
        setNewTask(event.target.value);
    }

    let deleteTask = (id) => {
        setTasks((prevTasks) => {
            return prevTasks.filter((task) => task.id !== id)
        });
    }

    // let upperCaseAllTask = () => {
    //     setTasks((prevTasks) => {
    //         return prevTasks.map((task) => {
    //             return { ...task, todo: task.todo.toUpperCase() };
    //         });
    //     });
    // }

    // let upperCaseOneTask = (id) => {
    //     setTasks((prevTasks) => {
    //         return prevTasks.map((task) => {
    //             if (task.id === id) {
    //                 return { ...task, todo: task.todo.toUpperCase() };
    //             } else {
    //                 return task;
    //             }
    //         });
    //     });
    // }

    let markAllDone = () => {
        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                return { ...task, isDone: true };
            });
        });
    }

    let markAsDone = (id) => {
        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, isDone: true };
                } else {
                    return task;
                }
            });
        });
    }

    return (
        <div>
            <input type="text" placeholder="Enter a new todo..."
                value={newTask} onChange={updateTaskValue} style={{ margin: "10px 10px 0 0" }} />
            <button type="button" onClick={addNewTask}>Add Task</button>

            <h4>Tasks Todo</h4>
            <ul>
                {tasks.map((task) => {
                    return task.todo ?
                        <li key={task.id} style={{ listStylePosition: "inside", textDecoration: task.isDone ? "line-through": "none" }}>
                            <span>
                                {task.todo}
                                <button type="button" onClick={() => deleteTask(task.id)} style={{ marginLeft: "10px" }}>Delete</button>
                                {/* <button type="button" onClick={() => upperCaseOneTask(task.id)} style={{ marginLeft: "10px" }}>Uppercase</button> */}
                                <button type="button" onClick={() => markAsDone(task.id)} style={{ marginLeft: "10px" }}>Done</button>
                            </span>
                        </li> : null;
                })}
            </ul>
            {/* <button type="button" onClick={upperCaseAllTask}>Uppercase All Task</button> */}
            <button type="button" onClick={markAllDone}>Mark All Done</button>
        </div>
    );
}
