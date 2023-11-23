import { useState } from "react";
import "./App.css";

function App() {
  const [showDice, setShowDice] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [currScore, setCurrScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [toggleActive, setToggleActive] = useState("player--active");
  const rollDice = function () {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setShowDice(() => true);
    setImgSrc((src) => (src = randomNumber));
    addCurrScore(randomNumber);
  };
  const addCurrScore = function (dicNum) {
    setCurrScore((score) => score + dicNum);
  };
  const holdScore = function () {
    setTotalScore((score) => score + currScore);
  };

  const changeActivePlayer = function () {
    // when dice = 0
    // when userClcks on hold button
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
        />
        <Section
          pNum={"1"}
          playerActive={""}
          idName={"1"}
          idScore={"1"}
          idCurrent={"1"}
          score={totalScore}
          currScore={currScore}
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
  currScore,
}) {
  return (
    <section className={`player player--${pNum} ${playerActive}`}>
      <h2 className="name" id={`name--${idName}`}>
        Player 1
      </h2>
      <p className="score" id={`score--${idScore}`}>
        {score}
      </p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score" id={`current--${idCurrent}`}>
          {currScore}
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
