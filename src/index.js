import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  // the useState will return two fields
  // 0: undefined 1: a function
  // const result = useState();

  const [status, setStatus] = useState("Not Delivered");

  return (
    <div>
      <h1>The package is: {status}.</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
