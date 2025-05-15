
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";



export const TodoApp = () => {
 
  const {todos, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodo()
  return (
    <div className="container py-4">
      <h1 className="text-primary mb-4">
        Todo App: 10 - <small className="text-danger"> Pendientes: {todos.length}</small>
      </h1>
      <hr />
      <div className="row">
        
        <div className="col-md-7">
          <TodoList  
          todos={todos} 
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
          />
         
        </div>

        <div className="col-md-5 mt-4 mt-md-0">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title text-success">Agregar TODO</h4>
              <TodoAdd  onNewTodo={handleNewTodo}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
