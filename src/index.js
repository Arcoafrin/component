import React from "react";
import ReactDOM from "react-dom";

function Heading() {
  return <h1>Become a Full-Stack Web Developer with just one course.</h1>;
}
ReactDOM.render(
  <div>
    <Heading></Heading>

    <ul className="content">
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>Node</li>
      <li>React</li>
      <li>PostgreSQL</li>
      <li>Web3</li>
      <li>DApps</li>
    </ul>
  </div>,
  document.getElementById("root")
);
