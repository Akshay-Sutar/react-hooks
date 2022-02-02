import "./App.css";
import UseMemoHook from "./UseMemoHook";
import UseContextHook from "./UseContextHook";
import UseCallbackHook from "./UseCallbackHook";
import UseReducerHook from "./UseReducerHook";

function App() {
  return (
    <div className="App">
      <UseMemoHook />
      <UseContextHook />
      <UseCallbackHook />
      <UseReducerHook />
    </div>
  );
}

export default App;
