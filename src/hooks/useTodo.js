import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";



//Mantener persistente la data en el localStorage con el init del useReducer
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  //Mantener persistente la data en el localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  //

  const handleNewTodo = (todo) => {
    // Agregar un nuevo todo
    const action = {
      type: "[ADD] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };
  // Eliminar un TODO
  const handleDeleteTodo = (id) => {
    const action = {
      type: "[DELETE] Remove Todo",
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[UPDATE] Toggle Todo",
      payload: id,
    });
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
