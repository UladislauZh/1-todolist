import React, { useRef, useState } from "react";
import { FilterValuesType, TaskType } from "./App";
import { TodolistHeader } from "./TodolistHeader";
// import { AddForm } from "./AddForm";
import { FilterButtons } from "./FilterButtons";
import { Button } from "./Button";

type TodolistPropsType = {
  title: string;
  tasks: TaskType[];
  addTask: (title: string) => void;
  removeTask: (taskId: string) => void;
  changeTodolistFilter: (nextFilter: FilterValuesType) => void;
};

export const Todolist = (props: TodolistPropsType) => {
  // const {title, tasks} = props   Деструктуризация

  // const taskInputRef = useRef<HTMLInputElement>(null);
  const [taskTitle, setTaskTitle] = useState("");

  // условный рендеринг
  const tasksList =
    props.tasks.length === 0 ? (
      <span>Your todolist is empty</span>
    ) : (
      <ul>
        {props.tasks.map((t) => {
          return (
            <li>
              <input type='checkbox' checked={t.isDone} />
              <span>{t.title}</span>
              <Button
                title={"x"}
                onClickHandler={() => props.removeTask(t.id)}
              />
            </li>
          );
        })}
      </ul>
    );

  const isAddTaskPossible = taskTitle.length <= 15;

  const addTaskHandler = () => {
    props.addTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <div className='todolist'>
      <TodolistHeader title={props.title} />
      <div>
        {/* <input ref={taskInputRef} /> */}
        <input
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.currentTarget.value)} //можно юзать onInput
        />
        <Button
          title='+'
          onClickHandler={
            addTaskHandler
            // if (taskInputRef.current) {
            //   props.addTask(taskInputRef.current.value);
            //   taskInputRef.current.value = "";
            // }
          }
          isBtnDisabled={!taskTitle.length || !isAddTaskPossible}
        />
      </div>
      {!isAddTaskPossible && <div>Task tittle is to long</div>}
      {!taskTitle.length && <div>Enter task title(Max 15 chars)</div>}
      {/* <AddForm /> */}
      {tasksList}
      <FilterButtons changeTodolistFilter={props.changeTodolistFilter} />
    </div>
  );
};
