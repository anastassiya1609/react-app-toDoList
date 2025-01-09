import ToDoListItem from "./ToDoListItem";

const tasks = [
  {
    name: "Дописать статью",
    isCompleted: false,
  },
  {
    name: "Скачать сериал",
    isCompleted: true,
  },
  {
    name: "Прочитать 3 главу книги",
    isCompleted: true,
  },
  {
    name: "Приготовить ужин",
    isCompleted: false,
  },
];

export default function ToDoList() {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <ToDoListItem title={task.name} isCompleted={task.isCompleted} />
      ))}
    </ul>
  );
}
