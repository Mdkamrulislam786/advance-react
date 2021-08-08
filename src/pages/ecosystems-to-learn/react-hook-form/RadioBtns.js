import React, { forwardRef } from "react";
import Radio from "../../../Components/Radio/Radio";

const RadioBtns = forwardRef((ref) => {
  return (
    <>
      <Radio name="radio" label="Yes" type="checkbox" />
      <Radio name="radio" label="No" type="checkbox" />
    </>
  );
});

export default RadioBtns;
