import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [name, setName] = useState("Will");

  // useEffect takes a function and
  // it runs after each update
  useEffect(() => {
    // change the document title
    document.title = `Celebrate ${name}`;
  });

  return (
    <div>
      <h1>Congratulations {name}!</h1>
      <button onClick={() => setName("John")}>Change Winner</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
