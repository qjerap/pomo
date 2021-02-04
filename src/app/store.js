import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import timerReducer from "../components/Timer/timerSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    timer: timerReducer

  },
});
