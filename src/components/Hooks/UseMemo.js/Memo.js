import React, { useState, useEffect, useMemo } from "react";

const Memo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  //now it will not re-render as it dosent re-calculate
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  //now it will not re-render as it dosent re-calculate
  const themStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "dark" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  //runs even the same object but referes to different memeory location to stop it useMemo
  useEffect(() => {
    console.log("Theme styles");
  }, [themStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themStyles}> {doubleNumber} </div>
    </>
  );
};

export default Memo;

function slowFunction(num) {
  for (let i = 0; i < 100000000; i++) {}
  return num * 2;
}
