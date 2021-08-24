import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [name, setName] = useState("Will");
  const [admin, setAdmin] = useState(false);

  // useEffect takes a function and
  // it runs after each update
  useEffect(
    () => {
      // change the document title
      document.title = `Celebrate ${name}`;
      console.log(`Celebrate ${name}`);
    },
    // to set it to run only once
    //or when the variable is changed
    [name]
  );

  useEffect(() => {
    console.log(`The user is: ${admin ? "Admin" : "not admin"}`);
  }, [admin]);

  return (
    <div>
      <h1>Congratulations {name}!</h1>
      <button
        onClick={() => setName((name) => (name === "Will" ? "John" : "Will"))}
      >
        Change Winner
      </button>
      <p>{admin ? "logged in" : "not logged in"}</p>
      <button onClick={() => setAdmin((admin) => !admin)}>Log in</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
