import {TaskContext} from "./Context";
import { useContext } from "react";

const TaskItem = ({task}) => {
  const { handleDelete: onDelete } = useContext(TaskContext);
  return (
    <div className="task-item">
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
