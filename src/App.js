import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Section
          pNum={"0"}
          playerActive={"player--active"}
          idName={"0"}
          idScore={"0"}
          idCurrent={"0"}
          score={43}
          currScore={0}
        />
        <Section
          pNum={"1"}
          playerActive={""}
          idName={"1"}
          idScore={"1"}
          idCurrent={"1"}
          score={24}
          currScore={2}
        />
        <Img imgSrc={"5"} />
        <Button btnType={"btn--new"}>🔄 New game</Button>
        <Button btnType={"btn--roll"}>🎲 Roll dice</Button>
        <Button btnType={"btn--hold"}>📥 Hold</Button>
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

function Button({ btnType, children }) {
  return <button className={`btn ${btnType}`}>{children}</button>;
}
