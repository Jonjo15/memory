import React from "react";

function ScoreBoard(props) {
  return (
    <div>
      <h3>Score: {props.score}</h3>
      <h3>Top Score: {props.topScore}</h3>
    </div>
  );
}

export default ScoreBoard;
