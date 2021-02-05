import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    activeTimer: "shortBreak",
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  },
  reducers: {
    setActiveTimer: (state, action) => {
      state.activeTimer = action.payload;
    },
    setTime: (state, action) => {
      state.pomodoro = action.payload.pomodoro;
      state.shortBreak = action.payload.shortBreak;
      state.longBreak = action.payload.longBreak;
    },
  },
});

export const { setActiveTimer, setTime } = timerSlice.actions;

export const selectTimer = (state) => state.timer;

export default timerSlice.reducer;
