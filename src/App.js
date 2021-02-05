import React from 'react';
import { Counter } from './features/counter/Counter';
import Timer from "./components/Timer";
import TimerSelector from "./components/TimerSelector";

function App() {
  return (
    <div>
        <TimerSelector />
        <Timer />
    </div>
  );
}

export default App;
