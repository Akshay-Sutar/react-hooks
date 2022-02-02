import { useCallback, useState } from "react";
import List from "./List";

const UseCallbackHook = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, +number + 1, +number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <>
      <h2>UseCallback Hook</h2>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => setDark((prev) => !prev)}>Toggle theme</button>
        <List getItems={getItems}></List>
      </div>
    </>
  );
};

export default UseCallbackHook;
