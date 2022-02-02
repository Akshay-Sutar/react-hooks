import { useEffect, useMemo, useState } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNum = useMemo(() => {
    return doubleNumberFn(count);
  }, [count]);

  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  const clickHandle = () => {
    setDark((prevState) => !prevState);
  };

  useEffect(() => {
    console.log("Theme changed");
  }, [theme]);

  function doubleNumberFn(num) {
    return num * 2;
  }

  console.log("rendering");
  return (
    <>
      <h2>Use Memo Hook</h2>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <br />
      <button onClick={clickHandle}>Change Theme</button>
      <br />
      <div style={theme}>{doubleNum}</div>
    </>
  );
};

export default UseMemoHook;
