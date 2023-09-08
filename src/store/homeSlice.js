import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "counter",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfigurations: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfigurations, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
