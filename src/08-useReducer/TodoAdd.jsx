import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChange, onResetForm,} = useForm({
        description: ''
    })

    const onFOrmSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

     
        onNewTodo(newTodo);
        onResetForm();
    }

  return (
    <>
      <form onSubmit={onFOrmSubmit}>
        <input
          type="text"
          placeholder="¿Qué hay que hacer?"
          className="form-control mb-2"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-outline-primary w-100">
          Agregar
        </button>
      </form>
    </>
  );
};
