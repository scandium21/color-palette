import React from "react";
import { render } from "react-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";

const App = () => {
  return (
    <>
      <Palette {...seedColors[2]} />
    </>
  );
};
render(React.createElement(App), document.getElementById("root"));
