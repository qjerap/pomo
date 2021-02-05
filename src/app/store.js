import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import timerReducer from "../features/timer/timerSlice";
import themeReducer from "../features/theme/themeSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    timer: timerReducer,
    theme: themeReducer,
  },
});
