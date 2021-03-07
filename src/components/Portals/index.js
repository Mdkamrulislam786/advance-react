import React from "react";
import ShowModal from "./Modal/ShowModal";

const Portals = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <h4>Portals Demo</h4>
      <ShowModal />
    </div>
  );
};

export default Portals;
