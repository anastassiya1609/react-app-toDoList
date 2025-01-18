import ToDoListItem from "./ToDoListItem";

export default function ToDoList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <ToDoListItem
          title={task.name}
          isCompleted={task.isCompleted}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          key={task}
        />
      ))}
    </ul>
  );
}
