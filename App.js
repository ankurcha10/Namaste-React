import React from "react";
import ReactDOM from "react-dom";

import "./index.css"

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am h1 tag")
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
