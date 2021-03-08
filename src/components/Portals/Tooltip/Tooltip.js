import React, { useState } from "react";
import Portal from "../Portal";

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
          setOn(!isOn); // [ 3 ]
        }}
      >
        Click me
      </button>
      {isOn && (
        <Portal>
          <div>
            Awesome content that is never cut off by its parent container!
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Tooltip;
