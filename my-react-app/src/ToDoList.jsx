import React,{useState} from "react"

function ToDoList(){

    const [tasks, setTask] = useState(["watc f1"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function deleteTask(index){
        setTask(tasks.filter((_,i) => i!= index));
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t => [...t, newTask]);
        setNewTask("")
        }
        
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
            setTask(updatedTasks);
        }

        
    }

    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">

            <h1> To-Do-List</h1>
            <div>
                <input type="text"
                placeholder="enter a task"
                value={newTask}
                onChange={handleInputChange} />
                <button className="Add" onClick = {addTask}>🫡</button>
            </div>

            <ol>
                {tasks.map((task,index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete" onClick={() => deleteTask(index)}>❌</button>
                    <button className="moveUp" onClick={() => moveTaskUp(index)}>🔼</button>
                    <button className="moveDown" onClick={() => moveTaskDown(index)}>🔽</button>

                </li>)}
            </ol>
        </div>
    )


}


export default ToDoList