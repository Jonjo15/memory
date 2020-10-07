import React, { useState, useEffect } from "react";
import ScoreBoard from "./Scoreboard";
import "./App.css";
import characters from "./characters.json";
import MemoryCard from "./MemoryCard";
function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);
  const [charactersArray, setCharactersArray] = useState(characters.slice(0));
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  function handleClick(id) {
    console.log(id);
    if (clickedImages.includes(id)) {
      setScore(0);
      setClickedImages([]);
      setCharactersArray(characters.slice());
    } else {
      setScore(score + 1);
      setCharactersArray(shuffleArray(charactersArray));
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
  const elements = charactersArray.map((element, idx) => (
    <MemoryCard handleClick={handleClick} key={idx} data={element} />
  ));
  return (
    <div>
      <ScoreBoard score={score} topScore={topScore} />
      <div className="grid">{elements}</div>
    </div>
  );
}

export default App;
