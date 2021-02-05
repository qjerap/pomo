import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
      color: "red",
      darkTheme: true
  },
  reducers: {
    setColor: (state, action) => {
    },
    setLightTheme: (state, action) => {

    },
  },
});

export const { setColorr, setLightTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme;

export default themeSlice.reducer;
