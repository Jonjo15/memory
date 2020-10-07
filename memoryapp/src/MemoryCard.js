import React from "react";

function MemoryCard(props) {
  return (
    <div
      style={{
        backgroundImage: "url(" + props.data.image + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={(e) => props.handleClick(props.data.id)}
      className="memoryCard"
    >
      {/* <img alt={props.data.name} src={props.data.image} /> */}
      <div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
        <h2>{props.data.name}</h2>
        <h3>{props.data.occupation}</h3>
      </div>
    </div>
  );
}

export default MemoryCard;
