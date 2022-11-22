import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { genreSlice } from "./genre";
import { bookSlice } from "./book";
import { purchaseSlice } from "./purchase";
import { feedbackSlice } from "./feedback";

export const store = configureStore({
  reducer: combineReducers({
    genre: genreSlice.reducer,
    book: bookSlice.reducer,
    purchase: purchaseSlice.reducer,
    feedback: feedbackSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
