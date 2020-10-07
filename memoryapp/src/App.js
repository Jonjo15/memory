import React, { useState, useEffect } from "react";
import ScoreBoard from "./Scoreboard";
import "./App.css";
import characters from "./characters.json";
import MemoryCard from "./MemoryCard";
function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);
  function handleClick(id) {
    console.log(id);
    if (clickedImages.includes(id)) {
      setScore(0);
      setClickedImages([]);
    } else {
      setScore(score + 1);

      addClickedImg(id);
    }
  }
  useEffect(() => {
    if (score >= topScore) {
      setTopScore(score);
    }
  }, [score, topScore]);
  function addClickedImg(id) {
    setClickedImages(clickedImages.concat(id));
  }
  const elements = characters.map((element, idx) => (
    <MemoryCard handleClick={handleClick} key={idx} data={element} />
  ));
  return (
    <div>
      <ScoreBoard score={score} topScore={topScore} />
      {elements}
    </div>
  );
}

export default App;
