import { createReducer } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "ac65a047-9533-4f57-97e8-7101fc42e035",
    location: "Amsterdam",
    image:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896295/amsterdam_gmwsvq.webp",
    date1: "2023/08/23",
    date2: "2023/08/24",
  },
];

export const tripList = createReducer(initialState, {
  "trip/add": (state, { payload }) => [...state, payload],
});

export const tripFilter = createReducer("", {
  "filter/value": (_, { payload }) => payload,
});
