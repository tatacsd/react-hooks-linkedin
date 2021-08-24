import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

// pass the color of the stars
function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}

// if not pass use 5 as default
function StarRating({ totalStars = 5 }) {
  // handle the selected stars
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {createArray(totalStars).map((n, index) => (
        <Star
          key={index}
          selected={selectedStars > index}
          onSelect={() => setSelectedStars(index + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  );
}

function App() {
  return <StarRating totalStars={5} />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
