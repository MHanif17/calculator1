import React from "react";

function Button({ value, onClick, variant }) {
  return (
    <>
      <button
        onClick={() => onClick(value)}
        className={`p-5 text-center w-full m-w-15 rounded-lg text-lg font-medium transition-color ${variant}`}
      >
        {value}
      </button>
    </>
  );
}

export default Button;
