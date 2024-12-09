import React from "react";
import "./App.css";
import { Todolist } from "./Todolist";

// CRUD
// - Повторение, дублирование - 100%
// - Создание структуры - holy war

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

function App() {
  // BLL
  const todolistTitle = "What to learn";
  // const todolistTitle_2 = "What to buy";

  const [tasks, setNextTasks] = React.useState<Array<TaskType>>([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ]);

  // let tasks: Array<TaskType> = [
  //   { id: 1, title: "HTML&CSS", isDone: true },
  //   { id: 2, title: "JS", isDone: true },
  //   { id: 3, title: "React", isDone: false },
  // ];
  // const tasks_2: TaskType[] = [
  //   { id: 4, title: "Meat", isDone: true },
  //   { id: 5, title: "Beer", isDone: true },
  //   { id: 6, title: "Water", isDone: false },
  // ];

  const removeTask = (taskId: number) => {
    const nextState = tasks.filter((t) => t.id !== taskId);
    setNextTasks(nextState);
    // console.log(tasks);
  };

  // UI
  return (
    <div className="App">
      <Todolist title={todolistTitle} tasks={tasks} removeTask={removeTask} />
      {/* Todolist({title : "What to learn"}), tasks: task_1 */}
      {/* <Todolist title={todolistTitle_2} tasks={tasks_2} /> */}
    </div>
  );
}

export default App;
