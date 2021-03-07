import React, { useState, useRef } from "react";

const FocusElement = () => {
  const [name, setName] = useState("");
  const focusElemnt = useRef();

  const focus = () => {
    focusElemnt.current.focus();
  };
  return (
    <div>
      <input
        ref={focusElemnt}
        type="text"
        placeholder="your name..."
        value={name}
        onChange={(e) => setName(e.target.name)}
      />
      <p>My name is {name}</p>
      <button onClick={focus}>Focus </button>
    </div>
  );
};

export default FocusElement;
