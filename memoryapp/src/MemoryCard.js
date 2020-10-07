import React from "react";

function MemoryCard(props) {
  return (
    <div
      onClick={(e) => props.handleClick(props.data.id)}
      className="memoryCard"
    >
      <h2>{props.data.name}</h2>
      <h2>{props.data.occupation}</h2>
      <h2>{props.data.id}</h2>
    </div>
  );
}

export default MemoryCard;
