import React from "react";

function ScoreBoard(props) {
  return (
    <div className="scoreDiv">
      <h1>Memory Game</h1>
      <div className="scoreBoard">
        <h3>Score: {props.score}</h3>
        <h3>Top Score: {props.topScore}</h3>
      </div>
    </div>
  );
}

export default ScoreBoard;
