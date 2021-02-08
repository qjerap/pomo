import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSettings } from "../../features/timer/timerSlice";
import style from "./TimerSettings.module.scss";
import style2 from "../TimerSelector/TimerSelector.module.scss";
import { ReactComponent as IconClose } from "../../assets/icon-close.svg";

const Modal = (props) => {
  const dispatch = useDispatch();
  const [timeValue, setTimeValue] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });
  const [color, setColor] = useState("colorBlue");

  const handleNewTimeValue = (e) => {
    setTimeValue({
      ...timeValue,
      [e.target.id]: e.target.value,
    });
  };

  const handleDispatch = () => {
    dispatch(
      setSettings({
        pomodoro: timeValue.pomodoro,
        shortBreak: timeValue.shortBreak,
        longBreak: timeValue.longBreak,
        color: color,
      })
    );
  };

  return (
    <div
      className={style.modalContainer}
      onClick={props.handleModal}
      id="modalContainer"
    >
      <div className={style.modal} id="modal">
        <div className={`${style.settingRow}`}>
          <h2>settings</h2>
          <IconClose
            onClick={props.handleModal}
            className={style.close}
            id="iconClose"
          />
        </div>

        <div className={`${style.settingRow}`}>
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

        <div className={`${style.settingRow}`}>
          <h3>font</h3>
          <form
            className={style.radioForm}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          >
            <label className={style.radio}>
              <span className={style.radioInput}>
                <input
                  type="radio"
                  name="color"
                  id="colorRed"
                  value="colorRed"
                />
                <span
                  style={{ backgroundColor: "#f87070" }}
                  className={style.radioControl}
                ></span>
              </span>
            </label>

            <label className={style.radio}>
              <span className={style.radioInput}>
                <input
                  type="radio"
                  name="color"
                  id="colorBlue"
                  value="colorBlue"
                />
                <span
                  style={{ backgroundColor: "#70f3f8" }}
                  className={style.radioControl}
                ></span>
              </span>
            </label>
            <label className={style.radio}>
              <span className={style.radioInput}>
                <input
                  type="radio"
                  name="color"
                  id="colorPurple"
                  value="colorPurple"
                />
                <span
                  style={{ backgroundColor: "#d881f8" }}
                  className={style.radioControl}
                ></span>
              </span>
            </label>
          </form>
        </div>

        <div className={`${style.settingRow}`}>
          <h3>color</h3>
          <form
            className={style.radioForm}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          >
            <label className={style.radio}>
              <span className={style.radioInput}>
                <input
                  type="radio"
                  name="color"
                  id="colorRed"
                  value="colorRed"
                />
                <span
                  style={{ backgroundColor: "#f87070" }}
                  className={style.radioControl}
                ></span>
              </span>
            </label>

            <label className={style.radio}>
              <span className={style.radioInput}>
                <input
                  type="radio"
                  name="color"
                  id="colorBlue"
                  value="colorBlue"
                />
                <span
                  style={{ backgroundColor: "#70f3f8" }}
                  className={style.radioControl}
                ></span>
              </span>
            </label>
            <label className={style.radio}>
              <span className={style.radioInput}>
                <input
                  type="radio"
                  name="color"
                  id="colorPurple"
                  value="colorPurple"
                />
                <span
                  style={{ backgroundColor: "#d881f8" }}
                  className={style.radioControl}
                ></span>
              </span>
            </label>
          </form>
        </div>

        <button
          className={`${style2.btn}  ${style.btnApply}`}
          onClick={handleDispatch}
        >
          apply
        </button>
      </div>
    </div>
  );
};

export default Modal;
