import React, { memo, useState } from "react";

const TestInput = () => {
  console.log("render");
  const [inputValue, setInputValue] = useState<string>("default value");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  return <input value={inputValue} onChange={handleChange}></input>;
};

export default memo(TestInput);
