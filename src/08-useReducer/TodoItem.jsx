import React from "react";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span className={`text-secondary ${todo.done && 'text-decoration-line-through'}`}>{todo.description}</span>
        <button
          onClick={() => onToggleTodo(todo.id)}
          className="btn btn-sm btn-success"
        >
          Completar
        </button>
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className="btn btn-sm btn-danger"
        >
          Borrar
        </button>
      </li>
    </>
  );
};
