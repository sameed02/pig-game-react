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

export default Img;
