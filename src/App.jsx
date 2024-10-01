import { useState } from "react";
import TaskList from "./TaskList";
import initialTasks from "./data";
import "./styles.css";
import { TaskContext } from "./Context";


const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  return (
    <div className="App">
     
      <h1>Task Manager</h1>
      <TaskContext.Provider value={{tasks, handleDelete}}>
      <TaskList tasks={tasks} />
      </TaskContext.Provider>
    </div>
  );
};

export default App;
