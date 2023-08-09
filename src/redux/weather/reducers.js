import { createSlice } from "@reduxjs/toolkit";
import { getThunkData, getThunkDataByDay } from "./thunks";

export const tripSlice = createSlice({
  name: "trip",
  initialState: {
    trip: [],
    loading: false,
    error: null,
    oneDayWeather: {},
  },

  extraReducers: (builder) => {
    builder
      .addCase(getThunkData.pending, (state) => {
        state.loading = true;
      })

      .addCase(getThunkData.fulfilled, (state, action) => {
        state.trip = action.payload;
        state.loading = false;
      })

      .addCase(getThunkData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getThunkDataByDay.pending, (state) => {
        state.loading = true;
      })

      .addCase(getThunkDataByDay.fulfilled, (state, action) => {
        state.oneDayWeather = action.payload;
        state.loading = false;
      })

      .addCase(getThunkDataByDay.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default tripSlice.reducer;
