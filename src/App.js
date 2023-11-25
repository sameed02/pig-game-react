import { useState } from "react";
import "./App.css";

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
    if (activePlayer === 0) {
      updatedTotalScore = totalScore + currScore;
      updatedCurrScore = 0;
      setTotalScore((prevScore) => prevScore + currScore);
      setCurrScore(updatedCurrScore);
    } else if (activePlayer === 1) {
      updatedTotalScore = totalScore1 + currScore1;
      updatedCurrScore = 0;
      setTotalScore1((prevScore) => prevScore + currScore1);
      setCurrScore1(updatedCurrScore);
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
        />
        {showDice && <Img imgSrc={imgSrc} winner={winner} />}
        <Button btnType={"btn--new"} handlerClick={() => {}}>
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

function Section({
  pNum,
  playerActive,
  idName,
  idScore,
  idCurrent,
  score,
  score1,
  currScore,
  currScore1,
  player,
  activePlayer,
  winner,
}) {
  const isActivePlayer = activePlayer === Number(pNum);
  const isWinner = winner === Number(pNum);
  return (
    <section
      className={`player player--${pNum} ${
        activePlayer === Number(pNum) ? playerActive : ""
      } ${isWinner ? "player--winner" : ""}`}
    >
      <h2 className="name" id={`name--${idName}`}>
        {`player ${player}`}
      </h2>
      <p className="score" id={`score--${idScore}`}>
        {pNum === "0" ? score : score1}
      </p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score" id={`current--${idCurrent}`}>
          {isActivePlayer ? (activePlayer === 0 ? currScore : currScore1) : "0"}
        </p>
      </div>
    </section>
  );
}

function Img({ imgSrc, winner }) {
  return (
    <div>
      {winner === null && (
        <img
          src={`./img/dice-${imgSrc}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}
    </div>
  );
}

function Button({ handlerClick, btnType, children, winner }) {
  return (
    <button
      className={`btn ${btnType}`}
      onClick={handlerClick}
      disabled={
        winner !== null && (btnType === "btn--hold" || btnType === "btn--roll")
      }
      style={{
        backgroundColor:
          winner !== null &&
          (btnType === "btn--roll" || btnType === "btn--hold")
            ? "#c7365f"
            : "inherit",
      }}
    >
      {children}
    </button>
  );
}
