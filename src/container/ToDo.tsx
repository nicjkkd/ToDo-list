import React, { FunctionComponent, useState, useEffect } from "react";
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

const getStateFromLocalStorage = (id: string) => {
  const initialState = localStorage.getItem(id);
  if (!initialState) return [];
  return JSON.parse(initialState) as Array<TaskI>;
};

const ToDo: FunctionComponent<Props> = (props) => {
  const [list, setList] = useState<Array<TaskI>>(
    getStateFromLocalStorage(props.id)
  );

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
    const prevState = localStorage.getItem(props.id);
    if (prevState) {
      localStorage.setItem(props.id + "_prev", prevState);
    }
    localStorage.setItem(props.id, JSON.stringify(list));
  };

  const handleRevert = () => {
    const prevState = getStateFromLocalStorage(props.id + "_prev");
    console.log(prevState);
    setList(prevState);
  };

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.metaKey && event.key === "z") {
        handleRevert();
      }
    });
  }, []);

  return (
    <div className="main-block">
      <WelcomeBack>{props.userName}</WelcomeBack>
      <button onClick={handleClick}>Add new task</button>
      <div className="input-list-block">
        {list.map((task, index) => {
          return (
            <Task
              index={index}
              task={task}
              handleChange={handleChange}
              handleDelete={handleDelete}
            ></Task>
          );
        })}
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleRevert}>Revert last changes</button>
    </div>
  );
};

export default ToDo;

// current id = props.id
// 1. пофіксити багу з ревертом для всіх
// 2. безкінечний ctr + z
// 3. cmd + shift + z - відміняє команд з
// 4. useeffect && key in React for custom components
// значення зберігати не окремою id а в масив
//
