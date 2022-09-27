import React, { useState } from "react";
import History from "./History";
import "./UndoableCounter.css";
const UndoableCounter = () => {
  // history: action:something, before: something, after: something
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([{}]);
  const [redoTracker, setRedoTracker] = useState({});

  const handleUndo = () => {
    let newHistory = [...history];
    const lastAction = newHistory.shift();
    setHistory(newHistory);
    setCounter((counter) => counter - lastAction.action);
    setRedoTracker(lastAction);
  };
  const handleRedo = () => {
    setCounter((counter) => counter + redoTracker.action);
    const newHistory = [...history];
    newHistory.unshift(redoTracker);
    setHistory(newHistory);
    setRedoTracker({});
  };

  const handleClick = (e) => {
    const newHistory = [...history];
    newHistory.unshift({
      action: e,
      before: counter,
      after: counter + e,
    });
    setHistory(newHistory);

    setCounter((counter) => counter + e);
  };
  return (
    <div>
      <div className="counter-btn-container">
        <div className="btn">
          <button
            onClick={() => {
              handleClick(-100);
            }}>
            -100
          </button>
        </div>
        <div className="btn">
          <button
            onClick={() => {
              handleClick(-10);
            }}>
            -10
          </button>
        </div>
        <div className="btn">
          <button
            onClick={() => {
              handleClick(-1);
            }}>
            -1
          </button>
        </div>
        <div className="counter">
          <p>{counter}</p>
        </div>
        <div className="btn">
          <button
            onClick={() => {
              handleClick(+1);
            }}>
            +1
          </button>
        </div>
        <div className="btn">
          <button
            onClick={() => {
              handleClick(+10);
            }}>
            +10
          </button>
        </div>
        <div className="btn">
          <button
            onClick={() => {
              handleClick(+100);
            }}>
            +100
          </button>
        </div>
      </div>
      <div>
        <button onClick={() => handleUndo()}>Undo</button>
        {
          <button
            onClick={() => handleRedo()}
            disabled={Object.keys(redoTracker).length > 0 ? false : true}>
            Redo
          </button>
        }
      </div>
      {history.map((e, index) => {
        return (
          <History
            key={index}
            action={e.action}
            before={e.before}
            after={e.after}
          />
        );
      })}
    </div>
  );
};

export default UndoableCounter;
