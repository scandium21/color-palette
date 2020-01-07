import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

const Palette = props => {
  const colorBoxes = props.colors.map(color => (
    <ColorBox background={color.color} name={color.name} />
  ));
  console.log(colorBoxes);
  return (
    <div className="Palette">
      {/* Nav bar here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer */}
    </div>
  );
};

export default Palette;
