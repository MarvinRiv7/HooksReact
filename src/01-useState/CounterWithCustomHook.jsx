import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, reset, decrement } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button
        className="btn btn-info rounded-pill shadow-lg"
        onClick={() => increment (3)}
      >
        +1
      </button>
      <button
      onClick={reset}
        className="btn text-white"
        style={{ background: "linear-gradient( #ff416c, #ff4b2b)" }}
      >
        Reset
      </button>
      <button
      onClick={decrement} 
      className="btn btn-info rounded-pill shadow-lg">-1</button>
    </>
  );
};
