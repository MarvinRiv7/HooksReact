import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {



  return (
    <>
      <ul className="list-group shadow-sm">
        {todos.map((todo) => (
          <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDeleteTodo={id => onDeleteTodo(id)}
          onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
    </>
  );
};
