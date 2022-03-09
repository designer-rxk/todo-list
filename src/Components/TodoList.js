import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filterTodos }) {
  return (
      <div className="todo-container">
        <ul className="todo-list">
          {filterTodos.map((todo) => (
            <Todo key={todo.id} text={todo.text} todo={todo} setTodos={setTodos} todos={todos}/>
          ))}
        </ul>
      </div>
  );
}

export default TodoList;
