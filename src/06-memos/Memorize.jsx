import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setshow] = useState(true)

  return (
    <>
      <h1>
        Counter: <Small value={counter}/>
      </h1>

      <hr />

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
