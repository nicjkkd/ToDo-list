import React, { FunctionComponent, useState } from "react";
import WelcomeBack from "src/components/WelcomeBack";
import Task from "src/components/Task";
import "./ToDoStyles.css";

interface Props {
  userName: string;
  id: string;
}

export interface TaskI {
  name: string;
  description: string;
}

const getInitialState = (id: string) => {
  const initialState = localStorage.getItem(id);
  if (!initialState) return [];
  return JSON.parse(initialState) as Array<TaskI>;
};

const ToDo: FunctionComponent<Props> = (props) => {
  const [list, setList] = useState<Array<TaskI>>(getInitialState(props.id));

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const nextState = [...list];
    if (event.target.name === "ToDo Name") {
      nextState[index] = { ...list[index], name: event.target.value };
    } else {
      nextState[index] = { ...list[index], description: event.target.value };
    }
    setList(nextState);
  };

  const handleClick = () => {
    // setList([...list, "task 3"]);
    setList((prevState) => {
      return [...prevState, { name: "task", description: "some description" }];
    });
    console.log(list);
    console.log(`clicked ${props.userName}`);
  };

  const handleDelete = (index: number) => {
    const newtState = [...list];
    newtState.splice(index, 1);
    setList(newtState);
  };

  const handleSave = () => {
    localStorage.setItem(props.id, JSON.stringify(list));
  };

  return (
    <div className="main-block">
      <WelcomeBack>{props.userName}</WelcomeBack>
      <button onClick={handleClick}>Add new task</button>
      <div className="input-list-block">
        {list.map((elem, index) => {
          return (
            <Task
              index={index}
              elem={elem}
              handleChange={handleChange}
              handleDelete={handleDelete}
            ></Task>
          );
        })}
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ToDo;
