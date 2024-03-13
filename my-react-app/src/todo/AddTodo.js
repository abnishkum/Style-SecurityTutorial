import React, { useState, useRef, useContext } from "react";
import { TodoDispatch, ErrorContext } from "./../App";

// Import the styles
import "./todo.scss";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  const dispatch = useContext(TodoDispatch);
  const [{ message }, errorDispatch] = useContext(ErrorContext);

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.length === 0) {
      errorDispatch({ type: "ERROR_ACTIVE", payload: "Enter new task" });
      return;
    }

    const newTask = {
      task,
      id: Date.now()
    };

    dispatch({ type: "ADD_TODO", payload: newTask });
    errorDispatch({ type: "CLEAR_ERROR" });

    setTask("");
  };

  return (
    <div className="container">
      <h2 className="h2">TODO</h2>
      <div className="flex-center">
        <label className="label" htmlFor="new-todo">
          What needs to be done?
        </label>
      </div>
      <div className="flex-center">
        <form onSubmit={handleSubmit}>
          <input onChange={onChange} value={task} ref={inputRef} />
          <button>Add </button>
        </form>
      </div>
      {message && (
        <div className="flex-center">
          <h4 className="error">{message}</h4>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
