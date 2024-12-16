import React from "react";
import { Button } from "./Button";
import { FilterValuesType } from "./App";

// type FilterButtonsPropsType = {};

// С деструктуризацией

type FilterButtonsPropsType = {
  changeTodolistFilter: (nextFilter: FilterValuesType) => void;
};

export const FilterButtons = ({
  changeTodolistFilter,
}: FilterButtonsPropsType) => {
  return (
    <div>
      <Button title="All" onClickHandler={() => changeTodolistFilter("all")} />
      <Button
        title="Active"
        onClickHandler={() => changeTodolistFilter("active")}
      />
      <Button
        title="Completed"
        onClickHandler={() => changeTodolistFilter("completed")}
      />
      {/* <button>All</button>
    <button>Active</button>
    <button>Completed</button> */}
    </div>
  );
};
