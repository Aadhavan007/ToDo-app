import css from '../style/ToDo.css';

function ToDO() {
    return(<><header className="hero">
        <h1>My To-Do List</h1>
    </header>
    <div className="main-container">
        <h2>Welcome to your To-Do List</h2>
    </div>
    <div className="row">
        <div className="item">
            <label>Add task</label>
        </div>

        <div className="item">
            <input type="text" placeholder="Enter your task here" />
        </div>
        <div className="item">
            <label>Add Description</label>
        </div>
        <div className="item">
            <input type="text" textarea="Enter task description" />
        </div>

        <div className="item">
            <label>Due Date</label>
        </div>
        <div className="item">
            <input type="date" />
        </div>
        <div className="item">
            <label>Priority</label>
        </div>
        <div className="item">
            <select className="item">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
        <div className="item">
            <label>Category</label>
            <select className='item'>     
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="shopping">Shopping</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="item">
            <button>Add Task</button>
        </div>

    </div>
    </>)
}
export default ToDO;