import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTimer } from "../../features/timer/timerSlice";
import style from "./Timer.module.scss";

const Timer = () => {
  // get State from store
  const myState = useSelector(selectTimer);
  // and the initial time for the selected timer (pomodoro | shortBreak | longBreak)
  const initialTime = myState[myState.activeTimer];

  const [minutes, setMinutes] = useState(initialTime);
  const [seconds, setSeconds] = useState(0);

  //check if timer should start
  const [isTimerOn, setIsTimerOn] = useState(false);

  // PROGRESS STATE
  const [progress, setProgress] = useState(100);
  console.log(progress)
  // GET TOTAL TIME of ACTUAL TIMER <--------------------------------------------------####
  const totalTime = initialTime * 60;
  const time = minutes * 60 + seconds;
  // console.log(minutes * 60 + seconds)
  const percent = ((totalTime - time) / time) * 100;
  console.log(100 - percent);
  // console.log((time - totalTime) / totalTime * 100);

  // PROGRESS CIRCLE
  const radius = 220;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    setMinutes(initialTime);
    setSeconds(0);
    setIsTimerOn(false);
    setProgress(100)
  }, [initialTime]);

  useEffect(() => {
    if (isTimerOn) {
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
        setProgress(300 - percent);
      }, 1000);

      return () => {
        clearInterval(myInterval);
      };
    }
  });

  return (
    <div className={style.timer}>
      <div className={style.background}></div>
      <div className={style.clock}>
        {minutes === 0 && seconds === 0 ? null : (
          <div>
            {" "}
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        )}
      </div>

      <div className={style.progressRing}>
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#f87070"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            stroke-width={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
      </div>

      <button
        className={style.btn}
        onClick={() => {
          setIsTimerOn(!isTimerOn);
        }}
      >
        {isTimerOn ? "PAUSE" : "START"}
      </button>
    </div>
  );
};

export default Timer;
