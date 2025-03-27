import React from "react";
import { useState } from "react";

export const CounterApp = () => {
  const [{ counter1, counter2, counter3 }, setcounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  return (
    <>
      <h1>Counter1: {counter1} </h1>
      <h1>Counter2: {counter2} </h1>
      <h1>Counter3: {counter3} </h1>
      <hr />

      <button
        className="btn btn-primary btn-lg rounded-pill shadow-lg"
        onClick={() =>
          setcounter((state) => ({
            ...state,
            counter1: counter1 + 1,
            counter2: counter2 + 2,
            counter3: counter3 * 1
          }))
        }
      >
        +1
      </button>
    </>
  );
};
