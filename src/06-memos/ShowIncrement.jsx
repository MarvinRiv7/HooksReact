import React from "react";

export const ShowIncrement = ({ increment }) => {
  return (
    <button
      className="btn text-white"
      style={{ background: "linear-gradient( #ff416c, #ff4b2b)" }}
      onClick={() => increment(5)}
    >
      Incrementar
    </button>
  );
};
