import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { genreSlice } from "./genre";
import { bookSlice } from "./book";
import { purchaseSlice } from "./purchase";

export const store = configureStore({
  reducer: combineReducers({
    genre: genreSlice.reducer,
    book: bookSlice.reducer,
    purchase: purchaseSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
