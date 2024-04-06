import logo from './logo.svg';
import './App.css';
import Board from "./components/Board";
import Status from "./components/Status";
import ResetButton from "./components/ResetButton";
import {useState} from "react";

function App() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [status, setStatus] = useState("Next player: X")
    const [isCounterX, setIsCounterX] = useState(true);
    const [endGame, setEndGame] = useState(false)

  return (
    <div className="App flex flex-col w-full py-4 gap-10 items-center justify-center">
        <Status status={status} />

        <Board
            squares={squares}
            setSquares={setSquares}
            setStatus={setStatus}
            isCounterX={isCounterX}
            setIsCounterX={setIsCounterX}
            endGame={endGame}
            setEndGame={setEndGame}
        />

        <ResetButton
            setSquares={setSquares}
            setStatus={setStatus}
            setIsCounterX={setIsCounterX}
            setEndGame={setEndGame}
        />
    </div>
  );
}

export default App;
