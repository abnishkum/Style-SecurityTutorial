import React, { useReducer } from "react";
import AddTodo from "./todo/AddTodo";
import ListTodo from "./todo/ListTodo";
import { todoReducer, errorReducer } from "./reducers";

import "./styles.scss";

export const initialTodos = [
  {
    id: Date.now(),
    task: "Watch Movie",
    completed: false
  },
  {
    id: Date.now(),
    task: "Perform Test",
    completed: true
  }
];

export const initialError = {
  message: ""
};

export const TodoDispatch = React.createContext(null);
export const ErrorContext = React.createContext(null);

const TodoApp = () => {
  const [todos, todosDispatch] = useReducer(todoReducer, initialTodos);
  const [error, errorDispatch] = useReducer(errorReducer, initialError);

  return (
    <div className="App">
      <TodoDispatch.Provider value={todosDispatch}>
        <ErrorContext.Provider value={[error, errorDispatch]}>
          <div className="container">
            <AddTodo />
            <ListTodo todos={todos} />
          </div>
        </ErrorContext.Provider>
      </TodoDispatch.Provider>
    </div>
  );
};

export default TodoApp;
