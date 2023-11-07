import { useState } from "react";

function App() {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');

    function getTask(event) {
        setTask(event.target.value);
    }

    function addTask() {
        setTaskList([... taskList, task]);
        
    }

	return (
        <div>
            <input placeholder="Digite sua tarefa" onChange={getTask}/>
            <button onClick={addTask}>Adicionar Tarefa</button>

            <ul>
                {
                    taskList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );D
}

export default App;
