import React, { FunctionComponent } from "react";
import { TaskI } from "src/container/ToDo";

interface Props {
  index: number;
  elem: TaskI;
  handleChange(event: React.ChangeEvent<HTMLInputElement>, index: number): void;
  handleDelete(index: number): void;
}

const Task: FunctionComponent<Props> = ({
  index,
  elem,
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
        value={elem.name}
      ></input>
      <input
        name="ToDo description"
        onChange={(event) => {
          handleChange(event, index);
        }}
        key={index}
        value={elem.description}
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
