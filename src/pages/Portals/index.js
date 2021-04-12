import React from "react";
import ShowModal from "./Modal/ShowModal";
import Tooltip from "./Tooltip/Tooltip";
const Portals = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 auto",
        maxWidth: 400,
      }}
    >
      <h4>Portals Demo</h4>
      <ShowModal />
      <Tooltip />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, magni.
        Nostrum amet error deserunt? Fugiat, cupiditate vero nesciunt officia,
        repellendus quia porro fuga ea non odit nisi. Aspernatur, vero aliquid.
      </p>
    </div>
  );
};

export default Portals;
