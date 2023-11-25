function GameButton({ handlerClick, btnType, children, winner }) {
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
            ? "#2f2f2f"
            : "inherit",
        color:
          winner !== null &&
          (btnType === "btn--roll" || btnType === "btn--hold")
            ? "#fff"
            : "inherit",
      }}
    >
      {children}
    </button>
  );
}

export default GameButton;
