import React from "react";

const MemoComp = ({ name }) => {
  console.log("Memo component");
  return <div>Memo Comp: {name}</div>;
};

export default React.memo(MemoComp)
//it dosent re-renders, works like purecomp but its used for functional comp
