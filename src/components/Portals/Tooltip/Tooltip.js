import React, { useState } from "react";
import TooltipPortal from "./TooltipPortal";

const Tooltip = () => {
  const [coords, setCoords] = useState({}); // takes current button coordinates
  const [isOn, setOn] = useState(false); // toggles button visibility

  return (
    <div style={{ width: "400px", overflow: "hidden" }}>
      <button
        onClick={(e) => {
          const rect = e.target.getBoundingClientRect();
          setCoords({
            left: rect.x + rect.width / 2,
            top: rect.y + window.scrollY,
          });
          setOn(!isOn);
        }}
      >
        Click me
      </button>
      {isOn && (
        <TooltipPortal>
          <div
            style={{
              position: "absolute",
              backgroundColor: "#eee",
              ...coords,
              textAlign: "center",
              maxWidth: "300px",
              height: "100px",
              padding: "5px",
              margin: "0 auto",
            }}
          >
            Awesome content that is never cut off by its parent container!
          </div>
        </TooltipPortal>
      )}
    </div>
  );
};

export default Tooltip;
