import React from "react";
import { useDispatch } from "react-redux";
import { setActiveTimer } from "../../features/timer/timerSlice";
import style from "./TimerSelector.module.scss";

const TimerSelector = () => {
  const dispatch = useDispatch();
  const setSelector = (e) => {
    //GET the selector from the data- attribute
    const selector = e.target.getAttribute("data-info");
    //DISPATCH to the store
    dispatch(setActiveTimer(selector));
  };

  return (
    <div className={style.timerSelector}>
      <button className={style.btn} onClick={setSelector} data-info="pomodoro">
        pomodoro
      </button>
      <button
        className={style.btn}
        onClick={setSelector}
        data-info="shortBreak"
      >
        short break
      </button>
      <button className={style.btn} onClick={setSelector} data-info="longBreak">
        long break
      </button>
    </div>
  );
};

export default TimerSelector;
