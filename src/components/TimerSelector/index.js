import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setActiveTimer } from "../Timer/timerSlice";

const TimerSelector = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("pomodoro");

  const setSelector = (e) => {
    //GET the selector from the data- attribute
    const selector = e.target.getAttribute("data-info");
    console.log(selector);
    //DISPATCH to the store
    dispatch(setActiveTimer(selector))
  };

  return (
    <div>
      <button onClick={setSelector} data-info="pomodoro">
        pomodoro
      </button>
      <button onClick={setSelector} data-info="shortBreak">
        short break
      </button>
      <button onClick={setSelector} data-info="longBreak">
        long break
      </button>
    </div>
  );
};

export default TimerSelector;
