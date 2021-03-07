import React, { useState, useRef, useEffect } from "react";

const RenderCount = () => {
  const [name, setName] = useState('');
  let prevCount = useRef(0);
  let focusInput = useRef();


  useEffect(() => {
    prevCount.current = prevCount.current + 1;
  });

  return (
    <div>
      <input
        placeholder="your name..."
        ref={focusInput}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>My Name is {name}</p>
      <p>I rendered {prevCount.current} times</p>
    </div>
  );
};

export default RenderCount;
//This will never ever cause our compnent to re-render on state change
