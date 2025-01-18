import { FaTrashAlt } from "react-icons/fa";

export default function ToDoListItem({isCompleted, title, toggleTaskCompletion, deleteTask}) {
  const classNames = isCompleted ? "todo todo__completed" : "todo";
  
  function toggleTask(){
    toggleTaskCompletion(title);
  }

  return (
    <li className={classNames}>
      <span className="todo-border"></span>
      <div className="todo-part" >
        <div className="todo-toggle__outer " onClick={toggleTask}>
          {isCompleted ? <div class="todo-toggle__inner"></div> : null}
        </div>
        <h4 className="todo-title">{title}</h4>
      </div>
      <div className="todo-part">
        <FaTrashAlt className=" todo-delete" onClick={() => deleteTask(title)}></FaTrashAlt>
      </div>
    </li>
  );
}
