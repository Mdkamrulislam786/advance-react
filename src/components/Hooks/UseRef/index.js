import React from "react";
import FocusElement from "./FocusElement";
import RenderCount from "./RenderCount";
import PrevState from "./PrevState";

const UseRef = () => {
  return (
    <>
      <h4>UseRef Hook Demo</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div>
          <PrevState />
        </div>
        <div>
          <RenderCount />
        </div>
        <div>
          <FocusElement />
        </div>
      </div>
    </>
  );
};

export default UseRef;
