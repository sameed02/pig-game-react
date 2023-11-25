import { useState } from "react";
import "./App.css";
import Section from "./Section";
import Img from "./Dice";
import Button from "./GameButton";

function App() {
  const playerActive = "player--active";
  const [showDice, setShowDice] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [currScore, setCurrScore] = useState(0);
  const [currScore1, setCurrScore1] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [totalScore1, setTotalScore1] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [winner, setWinner] = useState(null);
  const [lastCurrentScore, setLastCurrentScore] = useState(0);

  const rollDice = function () {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setShowDice(() => true);
    setImgSrc((src) => (src = randomNumber));
    if (randomNumber === 1) {
      changeActivePlayer();
    } else {
      addCurrScore(randomNumber, activePlayer);
    }
  };
  const changeActivePlayer = function () {
    setActivePlayer((player) => (player === 0 ? 1 : 0));
    if (activePlayer === 0) {
      setCurrScore((score) => (score = 0));
    } else if (activePlayer === 1) {
      setCurrScore1((score) => (score = 0));
    }
  };
  const addCurrScore = function (dicNum, activePlayer) {
    if (activePlayer === 0) {
      setCurrScore((score) => score + dicNum);
    } else if (activePlayer === 1) {
      setCurrScore1((score) => score + dicNum);
    }
  };
  const holdScore = function () {
    let updatedTotalScore;
    let updatedCurrScore;
    let lastScore;
    if (activePlayer === 0) {
      updatedTotalScore = totalScore + currScore;
      lastScore = currScore;
      updatedCurrScore = 0;
      setTotalScore((prevScore) => prevScore + currScore);
      setCurrScore(updatedCurrScore);
      setLastCurrentScore(lastScore);
    } else if (activePlayer === 1) {
      updatedTotalScore = totalScore1 + currScore1;
      lastScore = currScore1;
      updatedCurrScore = 0;
      setTotalScore1((prevScore) => prevScore + currScore1);
      setCurrScore1(updatedCurrScore);
      setLastCurrentScore(lastScore);
    }

    checkWinner(updatedTotalScore);
  };

  const checkWinner = function (updatedTotalScore) {
    if (updatedTotalScore >= 20) {
      setWinner(activePlayer);
    } else {
      changeActivePlayer();
    }
  };

  const resetGame = function () {
    setActivePlayer(0);
    setWinner(null);
    setImgSrc("");
    setShowDice(false);
    setCurrScore(0);
    setCurrScore1(0);
    setTotalScore(0);
    setTotalScore1(0);
  };

  return (
    <div className="App">
      <main>
        <Section
          pNum={"0"}
          playerActive={playerActive}
          idName={"0"}
          idScore={"0"}
          idCurrent={"0"}
          score={totalScore}
          currScore={currScore}
          player={1}
          activePlayer={activePlayer}
          winner={winner}
          lastCurrScore={lastCurrentScore}
        />
        <Section
          pNum={"1"}
          playerActive={playerActive}
          idName={"1"}
          idScore={"1"}
          idCurrent={"1"}
          score1={totalScore1}
          currScore1={currScore1}
          player={2}
          activePlayer={activePlayer}
          winner={winner}
          lastCurrScore={lastCurrentScore}
        />
        {showDice && <Img imgSrc={imgSrc} winner={winner} />}
        <Button btnType={"btn--new"} handlerClick={resetGame}>
          🔄 New game
        </Button>
        <Button btnType={"btn--roll"} handlerClick={rollDice} winner={winner}>
          🎲 Roll dice
        </Button>
        <Button btnType={"btn--hold"} handlerClick={holdScore} winner={winner}>
          📥 Hold
        </Button>
      </main>
    </div>
  );
}

export default App;
