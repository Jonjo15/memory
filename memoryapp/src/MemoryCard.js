import React from "react";

function MemoryCard(props) {
  return (
    <div
      style={{
        backgroundImage: "url(" + props.data.image + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onClick={(e) => props.handleClick(props.data.id)}
      className="memoryCard"
    >
      {/* <img alt={props.data.name} src={props.data.image} /> */}
      <h2>{props.data.name}</h2>
      <h2>{props.data.occupation}</h2>
    </div>
  );
}

export default MemoryCard;
