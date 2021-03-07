import React, { useState, useEffect, useRef } from "react";

const PrevState = () => {
  const [name, setName] = useState("");
  let prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  });

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="your name..."
      />
      <h5>
        My name is {name} and it used to be {prevName.current}
      </h5>
   
    </div>
  );
};

export default PrevState;
