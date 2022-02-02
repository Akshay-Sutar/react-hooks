import React from "react";
import { ACTIONS } from "./UseReducerHook";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={(e) => {
          dispatch({ type: ACTIONS.TOOGLE_TODO, payload: { id: todo.id } });
        }}
      >
        Toggle
      </button>
      <button
        onClick={(e) => {
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
        }}
      >
        Delete
      </button>
    </div>
  );
}
