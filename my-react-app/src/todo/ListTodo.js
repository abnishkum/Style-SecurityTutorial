import React, { useContext } from "react";
import { TodoDispatch } from "./../App";

export default function ListTodo({ todos }) {
  const dispatch = useContext(TodoDispatch);

  const removeTask = (index) => {
    dispatch({ type: "REMOVE_TODO", payload: index });
  };

  const taskCompleted = (index) => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: index });
  };

  return (
    <div style={{ marginTop: "40px", width: "100%" }}>
      {todos.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <input
              type="checkbox"
              onChange={() => taskCompleted(index)}
              checked={false}
            />
            <p
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
                textDecoration: item.completed ? "line-through" : "none"
              }}
            >
              {item.task}
            </p>
            <button onClick={() => removeTask(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
