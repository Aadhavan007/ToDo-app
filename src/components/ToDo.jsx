import "../style/ToDo.css";
import { useState, useRef } from "react";

function ToDo() {

    const [tasks, setTasks] = useState([]);

    const taskNameRef = useRef();
    const taskDescriptionRef = useRef();
    const taskKindRef = useRef();
    const taskDueDateRef = useRef();
    const taskDueTimeRef = useRef();

    function buttonClickHandler() {

        const newTask = {
            taskName: taskNameRef.current.value,
            taskDescription: taskDescriptionRef.current.value,
            taskKind: taskKindRef.current.value,
            taskDueDate: taskDueDateRef.current.value,
            taskDueTime: taskDueTimeRef.current.value
        };

        setTasks(prevTasks => [...prevTasks, newTask]);

        taskNameRef.current.value = "";
        taskDescriptionRef.current.value = "";
        taskKindRef.current.selectedIndex = 0;
        taskDueDateRef.current.value = "";
        taskDueTimeRef.current.value = "";
    }

    return (
        <>
            <header className="hero">
                Aadhavan's Todo List
            </header>

            <div className="content">

                <div className="main-container">

                    <div className="row">
                        <div className="item">
                            <label>Add Task</label>
                        </div>

                        <div className="item">
                            <input
                                type="text"
                                placeholder="Please Enter the Task"
                                ref={taskNameRef}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="item">
                            <label>Add Description</label>
                        </div>

                        <div className="item">
                            <textarea
                                placeholder="Enter Description"
                                ref={taskDescriptionRef}
                            ></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <div className="item">
                            <label>Task Kind</label>
                        </div>

                        <div className="item">
                            <select ref={taskKindRef}>
                                <option>Personal</option>
                                <option>College</option>
                                <option>Shopping</option>
                                <option>Workout</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="item">
                            <label>Due Date</label>
                        </div>

                        <div className="item">
                            <input type="date" ref={taskDueDateRef} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="item">
                            <label>Due Time</label>
                        </div>

                        <div className="item">
                            <input type="time" ref={taskDueTimeRef} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="item"></div>

                        <div className="item">
                            <button onClick={buttonClickHandler}>
                                Add
                            </button>
                        </div>
                    </div>

                </div>

                <div className="task-list">

                    <h3>Tasks</h3>

                    {
                        tasks.map((task, index) => (

                            <div className="task" key={index}>

                                <h3>{task.taskName}</h3>

                                <p>{task.taskDescription}</p>

                                <p><strong>Category :</strong> {task.taskKind}</p>

                                <p><strong>Due Date :</strong> {task.taskDueDate}</p>

                                <p><strong>Due Time :</strong> {task.taskDueTime}</p>

                            </div>

                        ))
                    }

                </div>

            </div>
        </>
    );
}

export default ToDo;