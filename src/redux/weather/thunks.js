import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchTimelineDatesWeather } from "components/helpers/API";

export const getThunkData = createAsyncThunk(
  "getTripsList",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await FetchTimelineDatesWeather(params);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getThunkDataByDay = createAsyncThunk(
  "getTripForOneDay",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await FetchTimelineDatesWeather(params);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
