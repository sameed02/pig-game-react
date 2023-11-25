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
  lastCurrScore,
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
          {winner !== null
            ? isActivePlayer
              ? activePlayer === 0
                ? lastCurrScore
                : lastCurrScore
              : "0"
            : isActivePlayer
            ? activePlayer === 0
              ? currScore
              : currScore1
            : "0"}
        </p>
      </div>
    </section>
  );
}

export default Section;
