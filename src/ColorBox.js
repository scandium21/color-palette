import React from "react";
import "./ColorBox.css";

const ColorBox = props => {
  return (
    <div style={{ backgroundColor: props.background }} className="ColorBox">
      <span>{props.name}</span>
      <span>More</span>
    </div>
  );
};

export default ColorBox;
