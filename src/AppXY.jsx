import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [positon, setPositon] = useState({ x: 0, y: 0 });

  return (
    <div
      className="container"
      onPointerMove={(e) => {
        setPositon({ x: e.clientX, y: e.clientY });
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${positon.x}px, ${positon.y}px)` }}
      />
    </div>
  );
}
