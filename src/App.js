import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }

    // [1,2,3,4]     [1,2,3,4, task]
    const newTasks = [...tasks, task];
    setTask("");
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    return () => {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
    };
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Tareas</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="form-control"
        />
        <button onClick={addTask} className="btn btn-primary">Agregar</button>
      </div>
      <ul className="list-group">
        {tasks.map((task, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            {task}
            <button className="btn btn-sm btn-danger" onClick={deleteTask(i)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
