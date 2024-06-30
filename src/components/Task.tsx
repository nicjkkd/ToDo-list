import React, { FunctionComponent } from "react";
import { TaskI } from "src/container/ToDo";

interface Props {
  index: number;
  task: TaskI;
  handleChange(event: React.ChangeEvent<HTMLInputElement>, index: number): void;
  handleDelete(index: number): void;
}

const Task: FunctionComponent<Props> = ({
  index,
  task,
  handleChange,
  handleDelete,
}) => {
  return (
    <span>
      {index}:{" "}
      <input
        name="ToDo Name"
        onChange={(event) => {
          handleChange(event, index);
        }}
        key={index}
        value={task.name}
      ></input>
      <input
        name="ToDo description"
        onChange={(event) => {
          handleChange(event, index);
        }}
        key={index}
        value={task.description}
      ></input>
      <button
        onClick={() => {
          handleDelete(index);
        }}
      >
        X
      </button>
    </span>
  );
};

export default Task;
