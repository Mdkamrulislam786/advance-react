import React from "react";
import FocusInput from "./FocusInput";
import FRParentInput from "./ForwardRefs/FRParentInput";
import RefsDemo from "./RefsDemo";

const Refs = () => {
  return (
    <div>
      <h4>DOM Elememt refs</h4>
      <RefsDemo />
      <h4>Class Component refs- ref to child comp from parent comp</h4>
      <FocusInput />
      <h4>Forward refs- parent to child</h4>
      <FRParentInput />
    </div>
  );
};

export default Refs;
