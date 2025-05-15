
//1.Craear un estado inicial
const initialState = [
  {
    id: 1,
    todo: "Recolectar la pierdra del alma",
    done: false,
  },
];

// 2.Crear una funcion que reciba el estado y la accion
const todoReducer = (state = initialState, action = {}) => {

    //7.Preguntar si la accion es diferente a la que se espera y si no retornar el estado mas la nueva accion
    if(action?.type === "[TODO] Add Todo") {
        return [...state, action.payload];
    }

  return state;
};

// 3.Crear una accion
let todos = todoReducer();

// 4. Crear una nueva accion
const newTodo = {
    id: 2,
    todo: "Recolectar la pierdra del tiempo",
    done: false,
}

//5. agregar la nueva accion al estado
const addTodoAction = {
    type: "[TODO] Add Todo",
    payload: newTodo,
}

//6. Llamar la funcion con el nuevo estado
todos = todoReducer(todos, addTodoAction )

console.log({ state: todos });