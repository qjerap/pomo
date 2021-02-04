import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectTimer } from "./timerSlice";

const Timer = (props) => {
  // get State from store
  const myState = useSelector(selectTimer);
  // and the initial time for the selected timer (pomodoro | shortBreak | longBreak)
  const initialMinute = myState[myState.activeTimer];

  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(0);
  const [IsTimerOn, setIsTimerOn] = useState(false);

  useEffect(() => {
    if (IsTimerOn) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);

      return () => {
        clearInterval(myInterval);
      };
    }
  });

  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        <h1>
          {" "}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      )}
      <button
        onClick={() => {
          setIsTimerOn(!IsTimerOn);
        }}
      >
        START
      </button>
    </div>
  );
};

export default Timer;