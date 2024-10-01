import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;
