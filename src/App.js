import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showDice, setShowDice] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [currScore, setCurrScore] = useState(0);
  const [currScore1, setCurrScore1] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [totalScore1, setTotalScore1] = useState(0);
  const [toggleActive, setToggleActive] = useState("player--active");
  const [activePlayer, setActivePlayer] = useState(0);

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
    if (activePlayer === 0) {
      setTotalScore((score) => score + currScore);
      setCurrScore((score) => (score = 0));
    } else if (activePlayer === 1) {
      setTotalScore1((score1) => score1 + currScore1);
      setCurrScore1((score1) => (score1 = 0));
    }
    changeActivePlayer();
  };
  return (
    <div className="App">
      <main>
        <Section
          pNum={"0"}
          playerActive={toggleActive}
          idName={"0"}
          idScore={"0"}
          idCurrent={"0"}
          score={totalScore}
          currScore={currScore}
          player={1}
          activePlayer={activePlayer}
        />
        <Section
          pNum={"1"}
          playerActive={toggleActive}
          idName={"1"}
          idScore={"1"}
          idCurrent={"1"}
          score1={totalScore1}
          currScore1={currScore1}
          player={2}
          activePlayer={activePlayer}
        />
        {showDice && <Img imgSrc={imgSrc} />}
        <Button btnType={"btn--new"} handlerClick={() => {}}>
          🔄 New game
        </Button>
        <Button btnType={"btn--roll"} handlerClick={rollDice}>
          🎲 Roll dice
        </Button>
        <Button btnType={"btn--hold"} handlerClick={holdScore}>
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
}) {
  const isActivePlayer = activePlayer === Number(pNum);
  return (
    <section
      className={`player player--${pNum} ${
        activePlayer === Number(pNum) ? playerActive : ""
      }`}
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

function Img({ imgSrc }) {
  return (
    <img src={`./img/dice-${imgSrc}.png`} alt="Playing dice" className="dice" />
  );
}

function Button({ handlerClick, btnType, children }) {
  return (
    <button className={`btn ${btnType}`} onClick={handlerClick}>
      {children}
    </button>
  );
}
