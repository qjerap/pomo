import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    color: "colorRed",
    activeTimer: "pomodoro",
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  },
  reducers: {
    setActiveTimer: (state, action) => {
      state.activeTimer = action.payload;
    },
    setSettings: (state, action) => {
      state.pomodoro = action.payload.pomodoro;
      state.shortBreak = action.payload.shortBreak;
      state.longBreak = action.payload.longBreak;
      state.color = action.payload.color;
    },
  },
});

export const { setActiveTimer, setSettings } = timerSlice.actions;

export const selectTimer = (state) => state.timer;

export default timerSlice.reducer;
