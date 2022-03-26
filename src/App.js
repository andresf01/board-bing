import { useState, useRef } from "react";
import "./App.css";
import Ball from "./components/Ball";
import Board from "./components/Board";

function App() {
  const [balls, setBalls] = useState([]);
  const [lastBall, setLastBall] = useState(null);

  const inputRef = useRef(null);

  const handleAddBall = () => {
    const newBall = Number(inputRef.current.value);
    if (newBall) {
      console.log(newBall);
      setBalls(Array.from(new Set([...balls, newBall])));
      setLastBall(newBall);
      inputRef.current.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleAddBall();
  };

  const clear = () => {
    setBalls([]);
    setLastBall(null);
  };

  const handleToggleBall = (value) => {
    if (balls.includes(value)) {
      setBalls(balls.filter((e) => e !== value));
      if (lastBall === value) setLastBall(null);
    } else {
      setBalls([...balls, Number(value)]);
    }
  };

  return (
    <div className="App">
      <Board balls={balls} onToggleBall={handleToggleBall} />
      <div className="lastBall">
        <Ball number={lastBall} marked big />
      </div>
      <div className="ballInput">
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} type="number" />
          <button onClick={handleAddBall}>Add</button>
          <button onClick={clear}>Clear</button>
        </form>
      </div>
    </div>
  );
}

export default App;
