import React from "react";
import Timer from "./components/Timer";
import TimerSelector from "./components/TimerSelector";
import TimerSettings from "./components/TimerSettings";
import { useSelector } from "react-redux";
import style from "./styles/timerColor.module.scss";

function App() {
  const color = useSelector((state) => state.timer.color);

  return (
    <div id="pomodoro" className={style[color]}>
      <h1>pomodoro</h1>
      <TimerSelector />
      <Timer />
      <TimerSettings />
    </div>
  );
}

export default App;
