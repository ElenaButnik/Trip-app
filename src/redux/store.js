import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tripList, tripFilter } from "./trip/reducers";
import logger from "redux-logger";
import tripSlice from "./weather/reducers";

const persistConfig = {
  key: "trips",
  version: 1,
  storage,
  blacklist: ["filter"],
};

const tripListReducer = combineReducers({
  tripList: tripList,
  filter: tripFilter,
});

const persistedTrips = persistReducer(
  persistConfig,
  tripListReducer,
  tripSlice,
);
const persistedWeather = persistReducer(persistConfig, tripSlice);

export const store = configureStore({
  reducer: {
    persistedTrips,
    persistedWeather /*weatherByCityandDates: tripSlice */,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
