import React, { useState } from "react";
import "./App.css";
import { Todolist } from "./Todolist";
import { title } from "process";
import { v1 } from "uuid";

// CRUD
// - Повторение, дублирование - 100%
// - Создание структуры - holy war

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FilterValuesType = "all" | "active" | "completed";
function App() {
  // BLL
  const todolistTitle = "What to learn";

  const [tasks, setNextTasks] = useState<Array<TaskType>>([
    { id: v1(), title: "HTML&CSS", isDone: true }, //'done', 'notDone', 'paused'
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: false },
  ]);

  const removeTask = (taskId: string) => {
    const nextState = tasks.filter((t) => t.id !== taskId);
    setNextTasks(nextState);
  };
  //CRUD logic
  const addTask = (title: string) => {
    const newTask: TaskType = {
      // id: crypto.randomUUID()
      id: v1(),
      title: title,
      isDone: false,
    };

    const nextState: Array<TaskType> = [newTask, ...tasks];
    setNextTasks(nextState);
  };
  const changeTaskStatus = (taskId: string, newStatus: boolean) => {
    const nextState: Array<TaskType> = tasks.map((t) =>
      t.id === taskId ? { ...t, isDone: newStatus } : t
    );
    setNextTasks(nextState);
  };

  // UI

  const [filter, setNextFilter] = useState<FilterValuesType>("all");

  const changeTodolistFilter = (nextFilter: FilterValuesType) => {
    setNextFilter(nextFilter);
  };

  let filteredTasks: TaskType[] = tasks;
  if (filter === "active") {
    filteredTasks = tasks.filter((t) => t.isDone === false);
    // filteredTasks = tasks.filter(t => !t.isDone) ***так код будет короче***
  }
  if (filter === "completed") {
    filteredTasks = tasks.filter((t) => t.isDone === true);
    //filteredTasks = tasks.filter(t => t.isDone) ***так код будет короче***
  }

  return (
    <div className='App'>
      <Todolist
        changeTodolistFilter={changeTodolistFilter}
        title={todolistTitle}
        tasks={filteredTasks}
        removeTask={removeTask}
        changeTaskStatus={changeTaskStatus}
        addTask={addTask}
      />
      {/* Todolist({title : "What to learn"}), tasks: task_1 */}
      {/* <Todolist title={todolistTitle_2} tasks={tasks_2} /> */}
    </div>
  );
}

export default App;
