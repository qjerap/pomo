import React from 'react';
import Timer from "./components/Timer";
import TimerSelector from "./components/TimerSelector";
import TimerSettings from "./components/TimerSettings";

import Variables from "./styles/Variables.module.scss";


function App() {
  return (
    <div className={Variables.colorRed}>
        <TimerSelector />
        <Timer />
        <TimerSettings />
    </div>
  );
}

export default App;
