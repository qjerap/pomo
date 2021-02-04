import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    activeTimer: "pomodoro",  
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15
  },
  reducers: {
    setActiveTimer: (state, action) => {
      state.activeTimer = action.payload;
    },
    setTime: (state, action) => {
        state[action.payload.type] = action.payload.time;
    },
  },
});

export const { setActiveTimer, setTime } = timerSlice.actions;

export const selectTimer = state => state.timer;

export default timerSlice.reducer;
