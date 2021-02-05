import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTime } from "../../features/timer/timerSlice";

const TimerSettings = () => {
  const dispatch = useDispatch();  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeValue, setTimeValue] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  const handleNewTimeValue = (e) => {
    setTimeValue({
      ...timeValue,
      [e.target.id]: e.target.value,
    });
  };

  const handleDispatch = () => {
    dispatch(setTime(
        {
            pomodoro: timeValue.pomodoro,
            shortBreak: timeValue.shortBreak,
            longBreak: timeValue.longBreak
        }
    ))
  }

  return (
    <React.Fragment>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        settings
      </button>

      {isModalOpen && (
        <div>
          <div>
            <h2>settings</h2>
            <div>x</div>
          </div>

          <div>
            <h3>time (minutes)</h3>
            <form>
              <div>
                <label htmlFor="pomodoro">pomodoro</label>
                <input
                  type="number"
                  name="pomodoro"
                  id="pomodoro"
                  value={timeValue.pomodoro}
                  onChange={handleNewTimeValue}
                />
              </div>
              <div>
                <label htmlFor="shortBreak">short break</label>
                <input
                  type="number"
                  name="shortBreak"
                  id="shortBreak"
                  value={timeValue.shortBreak}
                  onChange={handleNewTimeValue}
                />
              </div>
              <div>
                <label htmlFor="longBreak">long break</label>
                <input
                  type="number"
                  name="longBreak"
                  id="longBreak"
                  value={timeValue.longBreak}
                  onChange={handleNewTimeValue}
                />
              </div>
            </form>
          </div>
          <div>
            <h3>font</h3>
          </div>
          <div>
            <h3>color</h3>
          </div>
          <button onClick={handleDispatch}>apply</button>
        </div>
      )}
    </React.Fragment>
  );
};

export default TimerSettings;
