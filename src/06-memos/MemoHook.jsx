import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";


const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
      console.log('Ahi vamos')
    }

    return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setshow] = useState(true);

  const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>

      <hr />

      <h4>{memorizeValue}</h4>

      <button
        className="btn btn-primary rounded-pill shadow px-4"
        onClick={() => increment()}
      >
        <i className="bi bi-plus-circle me-2"></i>+ 1
      </button>

      <button className="btn btn-primary rounded-pill shadow px-4" 
      onClick={() => setshow(!show)}
      >
            Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
