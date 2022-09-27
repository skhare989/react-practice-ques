import React, { useEffect, useState } from "react";
import "./CountdownTImer.css";

const CountdownTimer = () => {
  const initialTimerState = {
    hh: 0,
    mm: 0,
    ss: 0,
  };
  const [timerInputState, setTimerInputState] = useState(initialTimerState);
  const [timerState, setTimerState] = useState(initialTimerState);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    setTimerState({
      hh: timerInputState.hh,
      mm: timerInputState.mm,
      ss: timerInputState.ss,
    });
  }, [timerInputState]);

  useEffect(() => {
    if (counting) {
      const interval = setInterval(() => {
        deductByOneSecond();
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
    console.log("rerender");
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTimerInputState({ ...timerInputState, [name]: Number(value) });
  };

  const deductByOneSecond = () => {
    const { hh, mm, ss } = timerState;

    const totalTimeInSeconds = hh * 3600 + mm * 60 + ss;

    const newSecs = Number(totalTimeInSeconds) - 1;
    console.log(newSecs);
    const newTimerState = {
      hh: 0,
      mm: 0,
      ss: newSecs,
    };

    setTimerState((prevState) => newTimerState);

    console.log(timerState);
  };

  const handleStart = () => {
    setCounting(true);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="HH"
          name="hh"
          onChange={(e) => {
            handleChange(e);
          }}
          value={timerInputState.hh}
          className="timer-blocks"
        />
        <input
          type="text"
          placeholder="MM"
          name="mm"
          onChange={(e) => {
            handleChange(e);
          }}
          value={timerInputState.mm}
          className="timer-blocks"
        />
        <input
          type="text"
          placeholder="SS"
          name="ss"
          onChange={(e) => {
            handleChange(e);
          }}
          value={timerInputState.ss}
          className="timer-blocks"
        />
        <button
          onClick={() => {
            handleStart();
          }}>
          Start
        </button>
      </div>
      <div>
        {timerState.hh}
        {timerState.mm}
        {timerState.ss}
      </div>
    </div>
  );
};

export default CountdownTimer;
