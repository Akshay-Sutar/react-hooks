import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";
import { ThemeContext } from "./context/ThemeContext";

const UseContextHook = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <>
      <h2>Use Context Hook</h2>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toogle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
};

export default UseContextHook;
