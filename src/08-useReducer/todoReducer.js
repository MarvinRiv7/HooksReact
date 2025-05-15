

export const todoReducer = (initialState, action) => {
  switch (action.type) {
    //Agregar un nuevo todo
    case "[ADD] Add Todo":
      return [...initialState, action.payload];
      //ELiminar un TODO
    case "[DELETE] Remove Todo":
        return initialState.filter(todo => todo.id !== action.payload);
    //Actualizar un TODO
    case "[UPDATE] Toggle Todo":
      return initialState.map(todo => {
        if(todo.id === action.payload){
            return {
                ...todo,
                done: !todo.done
            }
        }
        return todo;
      })
    default:
      return initialState;
  }
};
