import Ball from "./Ball";

const Board = ({
  balls = [],
  ballsPerRow = 15,
  word = "BINGO",
  onToggleBall,
}) => {
  let sample = Array.from({ length: ballsPerRow }, (_, i) => i + 1);
  return (
    <div>
      <h1>Board</h1>
      <div>{`${balls.length}/${word.length * ballsPerRow}`}</div>
      <div className="table">
        {word.split("").map((letter, i) => (
          <div className="board-row" key={`row-${i}`}>
            <div style={{ color: "red" }} className="letter">
              {letter}
            </div>
            {sample.map((e) => (
              <Ball
                key={`ball-${e + ballsPerRow * i}`}
                number={e + ballsPerRow * i}
                marked={balls.includes(e + ballsPerRow * i)}
                onClick={onToggleBall}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
