import React from "react";
import "./App.css";

function Tweet(prompt) {
  return (
    <div className="tweet">
      <h3>{prompt.className}</h3>
      <p>{prompt.message}</p>
      <h3>{prompt.likes}</h3>
    </div>
  );
}

export default Tweet;
